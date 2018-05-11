import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.css";
import "../api/Buses";

import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import { Comments } from "../api/Comments";
import {
  Col,
  Navbar,
  Nav,
  NavItem
} from "reactstrap";

import propTypes from "prop-types";
import CommentList from "./comments/CommentList";
import AccountsUIWrapper from "./AccountsUiWrapper";
import VisualComponent from "./visualization/VisualComponent";
import * as d3 from "d3-collection";

class App extends Component {
  //App constructor
  constructor(props) {
    super(props);

    //state values
    this.state = {
      data: null
    };

    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
    setInterval(this.fetchData, 15000); //fetchs the data again every 15 seconds.
  }

  // This fetch the data
  fetchData() {
    Meteor.call("getBusesData", (err, { content }) => {
      if (err) console.log(err);
      const data = JSON.parse(content);
      if (data !== null && typeof data !== "undefined") {
        let nestedData = d3.nest().key(d => d.routeTag).entries(data.vehicle);
        let rutes = nestedData.map(({ key }) => key);
        this.setState({ data, nestedData, rutes });
      }
    });
  }

  render() {
    const copyright = (this.state.data !== null && typeof this.state.data !== "undefined") ?
      this.state.data.copyright : "";

    return (
      <div>
        <Navbar color="dark">
          <Nav navbar>
            <NavItem>
              <AccountsUIWrapper />
            </NavItem>
          </Nav>
        </Navbar>
        <Col className="center" sm={12}>
          <h1 className="abajo" >Distance between buses in San Francisco's Routes</h1>
        </Col>
        <Col className="center" sm={12}>
          <VisualComponent nestedData={this.state.nestedData} rutes={this.state.rutes} />
        </Col>
        <Col className="center" sm={12}>
          <hr />
        </Col>
        <div>
          <CommentList
            comments={this.props.comments}
            user={this.props.user}
            rutes={this.state.rutes}
          />
        </div>
        <Col className="center" sm={12}>
          <hr />
        </Col>
        <Col className="center" sm={12}>
          <p>
            {copyright}
          </p>
        </Col>
      </div>
    );
  }
}

//PropTypes for the web Application
App.propTypes = {
  //arrays
  comments: propTypes.array.isRequired,
  //Objects
  user: propTypes.object
};

//Wrapper of react for Meteor
export default withTracker(() => {
  Meteor.subscribe("comments");
  let user = Meteor.user();
  if (user !== null && typeof user !== "undefined") {
    if (user.profile !== null && typeof user.profile !== "undefined") {
      user.username = user.profile.name;
    }
  }
  return {
    comments: Comments.find().fetch(),
    user: user
  };
})(App);

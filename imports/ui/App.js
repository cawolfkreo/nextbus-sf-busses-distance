import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.css";

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
  }

  // This fetch the data
  fetchData() {
    //url where the NextBus Json is from.
    const urlBuses = "https://gist.githubusercontent.com/john-guerra/a0b840ba721ed771dd02d94a855cb595/raw/d68dba41f118bebc438a4f7ade9d27078efdfc09/sfBuses.json";

    //fetch from the NextBus api
    fetch(urlBuses)
      .then(response => response.json())
      .then(data => {
        let nestedData = d3.nest().key(d => d.routeTag).entries(data.vehicle);
        let rutes = nestedData.map(({ key }) => key);
        this.setState({ data, nestedData, rutes });
      })
      .catch(err => console.log(err));
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

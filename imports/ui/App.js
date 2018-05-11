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

class App extends Component {
  //App constructor
  constructor(props) {
    super(props);

    //state values
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    //url where the NextBus Json is from.
    const urlBuses = "https://gist.githubusercontent.com/john-guerra/a0b840ba721ed771dd02d94a855cb595/raw/d68dba41f118bebc438a4f7ade9d27078efdfc09/sfBuses.json";

    //fetch from the NextBus api
    fetch(urlBuses)
      .then(response => response.json())
      .then(data => this.setState({ data: data }))
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
        <Col sm={{ size: 7, offset: 2 }}>
          <h1 className="abajo" >Distance between buses in Seatle Routes</h1>
        </Col>
        <Col sm={{ size: 9, offset: 1 }}>
          <hr />
        </Col>
        <div>
          <CommentList comments={this.props.comments} user={this.props.user} />
        </div>
        <Col sm={{ size: 8, offset: 1 }}>
          <hr />
        </Col>
        <Col sm={{ size: 7, offset: 2 }}>
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

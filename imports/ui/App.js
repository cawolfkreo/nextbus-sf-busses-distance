import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import { Comments } from "../api/Comments";
import propTypes from "prop-types";
import CommentList from "./comments/CommentList";

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
    const urlBuses = "https://gist.githubusercontent.com/john-guerra/a0b840ba721ed771dd02d94a855cb595/raw/d68dba41f118bebc438a4f7ade9d27078efdfc09/sfBuses.json";

    //fetch from the NextBus api
    fetch(urlBuses)
      .then(response => response.json())
      .then(data => this.setState({ data: data }))
      .catch(err => console.log(err));
  }

  render() {
    const copyright = (() => {
      let datos = this.state.data;
      if (datos !== null && typeof datos !== "undefined") {
        return datos.copyright;
      }
    })();
    return (
      <div>
        <h1>Distance between buses in Seatle Routes</h1>
        <hr/>
        <CommentList comments={this.props.comments} />
        <hr/>
        <div>
          {copyright}
        </div>
      </div>
    );
  }
}

//PropTypes for the web Application
App.propTypes = {
  //arrays
  comments: propTypes.array.isRequired
};

//Wrapper of react for Meteor
export default withTracker(() => {
  Meteor.subscribe("comments");
  return {
    comments: Comments.find().fetch()
  };
})(App);

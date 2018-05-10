import React, { Component } from "react";
import propTypes from "prop-types";

export default class CommentsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>Prueba :p</p>
      </div>
    );
  }
}

//PropTypes for this Component
CommentsList.propTypes = {
  //Arrays
  comments: propTypes.array
};

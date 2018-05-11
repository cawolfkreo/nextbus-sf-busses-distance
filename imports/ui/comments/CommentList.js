import React, { Component } from "react";
import propTypes from "prop-types";
import CommentForm from "./CommentForm";
import { Col } from "reactstrap";

export default class CommentsList extends Component {
  constructor(props) {
    super(props);

    this.renderForm = this.renderForm.bind(this);
  }

  renderForm() {
    if (this.props.user !== null && typeof this.props.user !== "undefined") {
      return (
        <CommentForm user={this.props.user} />
      );
    }
  }

  render() {
    const entrada = this.renderForm();
    return (
      <Col sm={{ offset: 3 }}>
        <Col sm={3}>
          <p>Prueba :p</p>
        </Col>
        <Col sm={{ size: 12, offset: 3 }}>
          {entrada}
        </Col>
      </Col>
    );
  }
}

//PropTypes for this Component
CommentsList.propTypes = {
  //Arrays
  comments: propTypes.array.isRequired,
  //Objects
  user: propTypes.object
};

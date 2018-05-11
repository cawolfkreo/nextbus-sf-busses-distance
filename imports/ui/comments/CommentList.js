import React, { Component } from "react";
import propTypes from "prop-types";
import CommentForm from "./CommentForm";
import CommentElement from "./CommentElement";
import { Col, Row } from "reactstrap";

export default class CommentsList extends Component {
  constructor(props) {
    super(props);

    this.renderForm = this.renderForm.bind(this);
    this.renderComments = this.renderComments.bind(this);
  }

  renderForm() {
    if (this.props.user !== null && typeof this.props.user !== "undefined") {
      return (
        <CommentForm user={this.props.user} />
      );
    } else {
      return "You need to be logged in to make a comment.";
    }
  }

  renderComments() {
    const comments = this.props.comments.slice();
    console.log(comments); //test
    return comments.map(({ _id, comment, name }) => {
      return (
        <CommentElement comment={comment} name={name} key={_id} />
      );
    });
  }

  render() {
    const input = this.renderForm();
    const commentList = this.renderComments();
    return (
      <Col sm="auto" >
        <Col sm={{ size: "auto", offset: 1 }}>
          {input}
        </Col>
        <Col sm={{ size: "10", offset: 1 }}>
          <h2>
            Comments:
          </h2>
          <br />
          <Row>
            {commentList}
          </Row>
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

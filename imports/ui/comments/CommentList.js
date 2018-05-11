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
        <CommentForm user={this.props.user} rutes={this.props.rutes}/>
      );
    } else {
      return "You need to be logged in to make a comment.";
    }
  }

  renderComments() {
    const comments = this.props.comments.slice();
    return comments.map(({ _id, comment, name, rute }) => {
      return (
        <CommentElement comment={comment} name={name} key={_id} rute={rute} />
      );
    });
  }

  render() {
    const input = this.renderForm();
    const commentList = this.renderComments();
    return (
      <Col sm="auto" >
        <Col className="move-right center" sm={6}>
          {input}
        </Col>
        <Col className="center" sm={12}>
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
  rutes: propTypes.array,
  //Objects
  user: propTypes.object
};

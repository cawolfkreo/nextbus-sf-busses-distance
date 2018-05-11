import React, { Component } from "react";
import propTypes from "prop-types";
import {
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText
} from "reactstrap";

export default class CommentElement extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Col sm={4}>
        <Card>
          <CardBody>
            <CardTitle><strong>User:</strong> {this.props.name}</CardTitle>
            <br/>
            <hr/>
            <CardText><strong>Comment:</strong>{this.props.comment}</CardText>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

//PropTypes for this Component
CommentElement.propTypes = {
  //Strings
  comment: propTypes.string.isRequired,
  name: propTypes.string.isRequired
};

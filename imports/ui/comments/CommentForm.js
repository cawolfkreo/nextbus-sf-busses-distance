import React, { Component } from "react";
import ReactDOM from "react-dom";
import propTypes from "prop-types";
import { Meteor } from "meteor/meteor";
import {
  Form,
  FormGroup,
  Label,
  InputGroup,
  Input,
  Button
} from "reactstrap";

export default class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.commentSubmission = this.commentSubmission.bind(this);
  }

  commentSubmission(event) {
    event.preventDefault(); //doesn't allow the webpage to reload

    const comment = ReactDOM.findDOMNode(this.refs.comment).value.trim(); //gets the contents on the input
    if (comment !== "") {
      Meteor.call("comment.insert", comment, this.props.user.username);
      ReactDOM.findDOMNode(this.refs.comment).value = "";
    }
  }

  render() {
    return (
      <Form onSubmit={this.commentSubmission}>
        <FormGroup>
          <Label for="comment">
            <p className="normal" >Add a comment about this route </p>
          </Label>
          <InputGroup>
            <Input
              id="comment"
              type="text"
              ref="comment"
              placeholder="Type your comment here..."
              className="largo"
            />
            <Button color="dark">Submit</Button>
          </InputGroup>
        </FormGroup>
      </Form>
    );
  }
}

//PropTypes for this Component
CommentForm.propTypes = {
  //Objects
  user: propTypes.object.isRequired
};

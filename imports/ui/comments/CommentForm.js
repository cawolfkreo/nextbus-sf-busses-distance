import React, { Component } from "react";
import ReactDOM from "react-dom";
import propTypes from "prop-types";
import { Meteor } from "meteor/meteor";
import {
  Form,
  Label,
  Input,
  Button,
  FormGroup
} from "reactstrap";

export default class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.commentSubmission = this.commentSubmission.bind(this);
    this.renderRutes = this.renderRutes.bind(this);
  }

  commentSubmission(event) {
    event.preventDefault(); //doesn't allow the webpage to reload

    const comment = ReactDOM.findDOMNode(this.refs.comment).value.trim(); //gets the contents on the input
    const rute = ReactDOM.findDOMNode(this.refs.rutes).value.trim();
    if (comment !== "" && rute !== "Select one") {
      Meteor.call("comment.insert", comment, this.props.user.username, rute);
      ReactDOM.findDOMNode(this.refs.comment).value = "";
      ReactDOM.findDOMNode(this.refs.rutes).value = "Select one";
    }
  }

  renderRutes() {
    let rutes = this.props.rutes;
    if (rutes !== null && typeof rutes !== "undefined") {
      rutes = rutes.slice();
      return rutes.map((tag, i) => <option key={i} >{tag}</option>);
    }
  }

  render() {
    const rutes = this.renderRutes();
    return (
      <Form onSubmit={this.commentSubmission}>
        <FormGroup>
          <Label for="comment">
            <p className="normal" >Add a comment about a route</p>
          </Label>
          <Input
            id="comment"
            type="text"
            ref="comment"
            placeholder="Type your comment here..."
            className="largo"
          />
        </FormGroup>
        <FormGroup>
          <Label for="rutes">
            <p className="normal" >Select a route</p>
          </Label>
          <Input
            type="select"
            name="rutes"
            id="rutes"
            ref="rutes"
          >
            <option>Select one</option>
            {rutes}
          </Input>
        </FormGroup>
        <Button color="dark">Submit</Button>
      </Form >
    );
  }
}

//PropTypes for this Component
CommentForm.propTypes = {
  //Arrays
  rutes: propTypes.array,
  //Objects
  user: propTypes.object.isRequired
};

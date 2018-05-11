import React, { Component } from "react";
import propTypes from "prop-types";
import ReactDOM from "react-dom";
import {
  Form,
  FormGroup,
  Label,
  Button,
  Input
} from "reactstrap";

export default class RuteSelector extends Component {
  constructor(props) {
    super(props);
    this.ruteSubmission = this.ruteSubmission.bind(this);
  }

  ruteSubmission(event) {
    event.preventDefault(); //doesn't allow the webpage to reload
    const rute = ReactDOM.findDOMNode(this.refs.rutes).value.trim();
    if (rute !== "Choose a route") {
      let a = 0;
      console.log(a);
    }
  }

  render() {
    return (
      <Form onSubmit={this.ruteSubmission}>
        <FormGroup>
          <Label for="rutes">
            <p>prueba</p>
          </Label>
          <Input
            type="select"
            name="rutes"
            id="rutes"
            ref="rutes"
          />
          <option>Choose a route</option>
          <Input/>
          <Button color="dark">Submit</Button>
        </FormGroup>
      </Form>
    );
  }
}

RuteSelector.propTypes = {
  //Arrays
  rutes: propTypes.array
};

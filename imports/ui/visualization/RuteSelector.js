import React, { Component } from "react";
import propTypes from "prop-types";
import ReactDOM from "react-dom";
import {
  Form,
  FormGroup,
  Label,
  Button,
  Input,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText
} from "reactstrap";

export default class RuteSelector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bus: null
    };

    this.ruteSubmission = this.ruteSubmission.bind(this);
    this.renderBus = this.renderBus.bind(this);
  }

  ruteSubmission(event) {
    event.preventDefault(); //doesn't allow the webpage to reload
    const rute = ReactDOM.findDOMNode(this.refs.rutesL).value.trim();
    if (rute !== "Choose a route") {
      let pickedRute = this.props.rutes.filter(({ key }) => key === rute).slice();
      if (pickedRute[0]) {
        pickedRute = pickedRute[0];
        let bus = null;
        let maxDistance = 0;
        pickedRute.values.map((b) => {
          if (b.distance > maxDistance) {
            bus = b;
            maxDistance = b.distance;
          }
        });
        this.setState({ bus });
      }
    }
  }

  renderRutes() {
    let rutes = this.props.rutes;
    if (rutes !== null && typeof rutes !== "undefined") {
      rutes = rutes.slice();
      return rutes.map(({ key }, i) => <option key={i} >{key}</option>);
    }
  }

  renderBus() {
    if (this.state.bus) {
      const bus = this.state.bus;
      return (
        <Card>
          <CardBody>
            <CardTitle><strong>Bus:</strong> {bus.heading}</CardTitle>
            <hr />
            <CardText className="justified" >
              <strong>Distance:</strong> {Math.trunc(bus.distance * 100) / 100} Km
            </CardText>
            <CardText className="justified" >
              <strong>Speed:</strong> {Math.trunc(Number(bus.speedKmHr) * 100) / 100} Km/H
            </CardText>
            <CardText className="justified" >
              <strong>Latitude:</strong> {Math.trunc(bus.lat * 100) / 100}
            </CardText>
            <CardText className="justified" >
              <strong>Longitude:</strong> {Math.trunc(bus.lon * 100) / 100}
            </CardText>
            <CardText className="justified" >
              <strong>Time since last report:</strong> {Math.trunc(bus.secsSinceReport * 100) / 100} secs
            </CardText>
          </CardBody>
        </Card>
      );
    }
    return "";
  }

  render() {
    const rutes = this.renderRutes();
    const bus = this.renderBus();
    return (
      <Col className="centered" sm={6} >
        <Form onSubmit={this.ruteSubmission}>
          <FormGroup>
            <Label for="rutesL">
              <p className="normal" >Select a route and the bus farthest away from the previous will appear.</p>
            </Label>
            <Input
              type="select"
              name="rutesL"
              id="rutesL"
              ref="rutesL"
            >
              <option>Choose a route</option>
              {rutes}
            </Input>
            <Button color="dark">Submit</Button>
          </FormGroup>
        </Form>
        <br />
        <Col className="centered" sm={6} >
          {bus}
        </Col>
      </Col>
    );
  }
}

RuteSelector.propTypes = {
  //Arrays
  rutes: propTypes.array.isRequired
};

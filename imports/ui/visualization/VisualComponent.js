import React, { Component } from "react";
import propTypes from "prop-types";

import BarGraph from "./BarGraph";
import RuteSelector from "./RuteSelector";

import { Row, Col } from "reactstrap";

export default class VisualComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rutesDistances: null
    };
    this.setrutesDistance = this.setrutesDistance.bind(this);
  }

  setrutesDistance(rutesDistances) {
    this.setState({ rutesDistances });
  }

  render() {
    const graph = this.props.nestedData ?
      (<BarGraph
        nestedData={this.props.nestedData}
        rutes={this.props.rutes}
        setRutes={this.setrutesDistance} />) : <p>Loading Data...</p>;
    const ruteSelector = this.state.rutesDistances ?
      (<RuteSelector className="abajo" rutes={this.state.rutesDistances} />) : "";
    return (
      <Row>
        <Col className="center" sm={12} >
          {graph}
        </Col>
        <Col sm={12} >
          {ruteSelector}
        </Col>
      </Row>
    );
  }
}

VisualComponent.propTypes = {
  //Arrays
  nestedData: propTypes.array,
  rutes: propTypes.array
};

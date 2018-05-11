import React, { Component } from "react";
import propTypes from "prop-types";

import BarGraph from "./BarGraph";

import { Row, Col } from "reactstrap";

export default class VisualComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ruteSelected: null,
      bus: null
    };
  }

  render() {
    const graph = this.props.nestedData ?
      <BarGraph nestedData={this.props.nestedData} /> : <p>Loading Data...</p>;
    return (
      <Row>
        <Col className="center" sm={12} >
          {graph}
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

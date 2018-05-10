import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";

class App extends Component {
  //App constructor
  constructor(props) {
    super(props);

    //state values
    this.state = {
      algo: null
    };
  }

  shouldComponentUpdate() {
    let res = Meteor.call("api.fetch", "");

    this.setState({ algo: res });
  }

  render() {
    return (
      <div>
        <h1>Hola</h1>
        <div>
          {this.state.algo}
        </div>
      </div>
    );
  }
}

//Wrapper of react for Meteor
export default withTracker(() => {
  Meteor.subscribe("comentarios");
})(App);

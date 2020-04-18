/* eslint-disable no-undef */
import React, { Component } from "react";
import Poductpage from "./product/product";
// // import Landingpage from  "./landigpage/landingpage"

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: "true",
      data: [],
    };
  }

  render() {
    return (
      <div>
        <Poductpage/>
      </div>
    );
  }
}

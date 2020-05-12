import React, { Component } from "react";
import Header from "/home/bhumika/nirakar/travell-app/src/allcomponent/header/header.js";
export default class Landingpageheader extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  

  


  render() {
    return <div>
        <Header  Change = {this.props.Change} />
    </div>
  }
}

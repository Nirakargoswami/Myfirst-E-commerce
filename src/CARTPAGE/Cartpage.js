import React, { Component } from "react";
import Stripecheckoutbutton from "./payment"

import {connect} from "react-redux"
class Cartpage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    const DATA = this.props.ITEMDATA.ITEMDATA[0];
    const IMAGE = DATA.images[0];
    console.log();
    return (
      <div>
        <div>
          <h3>ITEM NAME </h3>
        </div>
        <div>{DATA.title}</div>
        <div>
          <img src={IMAGE} alt="pic" />
          <div>
            <Stripecheckoutbutton/>
          </div>
        </div>
        <div>{}</div>
      </div>
    );
  }
}
const mapStateToProps =(state ) => {
    return {
      ITEMDATA: state.CARTDATA.CARTITEM,
       
    };
}
export default connect(mapStateToProps,null)(Cartpage)

import React, { Component } from "react";
import Header from "./landigpage_header";
import { Link } from "react-router-dom";
import DATA from "/home/bhumika/nirakar/travell-app/src/alldata/alldata.js";
import {GETDATA} from "../product/product_action";
import { connect } from "react-redux";

class landingpage extends Component {
  constructor(props) {
  props.getstate();
    super(props);
    this.state = {
      loading: "true",
      data: [],
      Title: "realkme",
      List: [],
    };
  }

  componentDidMount() {
    
    const TITLEDATA = [];
    var Regx = /[/]/gi;
    DATA.map((x) => x.map((y) => TITLEDATA.push(y.title.replace(Regx, ""))));
    this.setState({ data: TITLEDATA });
    
    console.log(this.props.CARTITAM);
  }

  Change = (e) => {
    this.setState({ Title: e.target.value });
  };

  render() {
    return (
      <div>
        <Header Change={this.Change} />
        <div style={{ position: "relative" }}>
          <div
            style={{
              display: this.state.Title.length > 0 ? "block" : "none",
            }}
          >
            <ul>
              {this.state.data.map((x) =>
                x.toLowerCase().includes(this.state.Title.toLowerCase()) ? (
                  <Link to={`productpage/${x}`}>
                  <li>{x}</li>
                    
                  </Link>
                ) : null
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getstate: () => dispatch(GETDATA()),
  };
};



export default connect(null, mapDispatchToProps)(landingpage);

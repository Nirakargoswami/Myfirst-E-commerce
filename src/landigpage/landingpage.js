import React, { Component } from "react";
import Header from "./landigpage_header";
import { Link } from "react-router-dom";
import DATA from "/home/bhumika/nirakar/travell-app/src/alldata/alldata.js";
import { GETDATA } from "../product/product_action";
import { connect } from "react-redux";
import { BOX } from "../allcomponent/newcomonent";
import {Search} from "./landigpage_STYLE"
class landingpage extends Component {
  constructor(props) {
    props.getstate();
    super(props);
    this.state = {
      loading: "true",
      data: [],
      Title: "",
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
        <Header  
       Change={this.Change} />

        <Search 
          style={DIPLAY_box}
          display={this.state.Title.length > 0 ? "block" : "none"}
        >
          
            <ul>
              {this.state.data.map((x) =>
                x.toLowerCase().includes(this.state.Title.toLowerCase()) ? (
                  <Link to={`productpage/${x}`}>
                    <li style={{ style: "none" }}>
                      <h5>{x}</h5>
                    </li>
                  </Link>
                ) : null
              )}
            </ul>
          
        </Search>
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

const DIPLAY_box = {
  height: "40rem",
  boxShadow: "5px 5px gray",
  position: "relative",

  top: "0rem",
  overflow: "scroll",
  zindex: "1",

};

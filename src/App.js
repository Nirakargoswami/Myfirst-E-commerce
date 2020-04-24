/* eslint-disable no-undef */
import React, { Component } from "react";
import { Route} from "react-router-dom";

import "./allcomponent/header/headre.css";
import LAndingpage from "./landigpage/landingpage";
import DATA from "./alldata/alldata";
import productpage from "./product/product";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: "true",
      data: [],
      Title: "",

      List: [],
    };
  }

  componentDidMount() {
    const TITLE = [];
    DATA.map((x) => x.map((y) => TITLE.push(y.title)));
    this.setState({ data: TITLE });
  }

  Change = (e) => {
    const ListM = [];
    this.state.data.map((x) =>
      x.toLowerCase().includes(this.state.Title.toLowerCase())
        ? ListM.push(x)
        : ""
    );
    this.setState({ Title: e.target.value, List: ListM });
  };

  render() {
    console.log(this.state.List);
    return (
      <div>
   
          <Route exact path="/" component={LAndingpage} />

          <div
            style={{
              display: this.state.Title.length > 0 ? "block" : "none",
            }}
            className="Suggestion_Box"
          >
            <ul>
              {this.state.List.map((x) => (
                <li>{x}</li>
              ))}
            </ul>
          </div>

          <Route path="/Productpage" component={productpage} />
      
      </div>
    );
  }
}
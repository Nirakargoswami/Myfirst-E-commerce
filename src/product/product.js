import React, { Component } from "react";

import "/home/bhumika/nirakar/travell-app/src/allcomponent/header/headre.css";
import "/home/bhumika/nirakar/travell-app/src/product/product.css";
import Prouctartical from "./ProductArtical/artical";
import {BUTTON}  from "../allcomponent/newcomonent"
export default class Productpage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log("history fri the me "+this.props);
    return (
      <div>
        <div className="Product_Main">
          <div>
            <Prouctartical NEWDATA={this.props.match.params.productName} />
            <div>
              <BUTTON
                style={{ color: "black" }}
                onClick={() => this.props.history.push("/")}
                type="button"
              >
                <h5>BACK to home</h5>
              </BUTTON>
            </div>
          </div>

          {/* od not touch under this line  */}
        </div>
      </div>
    );
  }
}

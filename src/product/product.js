import React, { Component } from "react";

import "/home/bhumika/nirakar/travell-app/src/allcomponent/header/headre.css";
import "/home/bhumika/nirakar/travell-app/src/product/product.css";
import Prouctartical from "./ProductArtical/artical";

export default class Productpage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="Product_Main">
          <div>
            <Prouctartical NEWDATA={this.props.match.params.productName} />
            <div>
              <button
                style={{ color: "black" }}
                onClick={() => this.props.history.push("/")}
                type="button"
              >
                <h3>BACK to home</h3>!
              </button>
            </div>
          </div>

          {/* od not touch under this line  */}
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";


import "/home/bhumika/nirakar/travell-app/src/allcomponent/header/headre.css";
import "/home/bhumika/nirakar/travell-app/src/product/product.css";
import Prouctartical from "./ProductArtical/artical";
import REALME  from "..//alldata/realme"
export default class Productpage extends Component {
  render() {
    return (
      <div>
        <div className="Product_Main">
         
          <div>
            <Prouctartical  DATA={REALME}/>
          </div>
          {/* od not touch under this line  */}
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import "/home/bhumika/nirakar/travell-app/src/product/product.css";
import { NO_OFITEM } from "../ProductUTILIT";
import DESCRIPTIONBOX from "./description";
import { TOTALINCART } from "../ProductUTILIT";
import { Link } from "react-router-dom";
import { BUTTON, ICON,BOX } from "../../allcomponent/newcomonent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {

  faCartArrowDown,



} from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import {
  DISPLAY_ITEM,
  FILTER_SORT,
  MAIN_BOX_OF_FILTER,
} from "../../landigpage/landigpage_STYLE"; 

class Prouctartical extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NEWDATA: [],

      image: [],
      display: false,
      CART_display: false,
      Check: false,
      DAT: [],
    };
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    const NEWTitle = this.props.NEWDATA;

    const MYDATA = this.props.DATA;

    const REGX = /[/]/gi;
    const Data = [];
    console.log(
      MYDATA.map((x) =>
        x.map((x) =>
          x.title.toLowerCase().replace(REGX, "") === NEWTitle.toLowerCase()
            ? Data.push(x)
            : ""
        )
      )
    );
    console.log(Data);
    console.log(Data[0].images[0]);
    this.setState({ DAT: Data });
    this.setState({ image: Data[0].images[0] });
  }

  ONCHANGE = () => {
    this.setState(
      (previous) => ({
        display: !previous.display,
      }),
      console.log("this is callback function")
    );
  };

  ONCHANGE_CART = () => {
    this.setState(
      (previous) => ({ CART_display: !previous.CART_display }),
      console.log("this.function is called")
    );
  };

  HIGH_PRICECHANGE = (previous) => {
    this.setState((previous) => ({
      DATA: this.state.DAT.sort(
        (x, y) =>
          parseInt(x.sellingPrice.replace(/[,₹]/g, "")) -
          parseInt(y.sellingPrice.replace(/[,₹]/g, ""))
      ),
      Check: !previous.Check,
    }));
  };

  render() {
    console.log(this.props.CARTITEM);
const WIDTH = {
  1: 100,
  2: 50,
  3: 33.3,
  
};
    const No_OF_ITEM = this.state.DAT.length < 4 ?  WIDTH[this.state.DAT.length]: 25 ;

     
      
    const DATA = this.props.CARTITEM;
    const DATA2 = this.state.image;
    return (
      <div>
        <MAIN_BOX_OF_FILTER width="100" column="column">
          <FILTER_SORT width="100">
            <BOX width="45">
              <BUTTON onClick={this.ONCHANGE_CART}>MY CART</BUTTON>
            </BOX>

            <BOX width="10">
              <ICON width="8">
    <span  style={{color:"black"}}  >{DATA}</span>
                <FontAwesomeIcon icon={faCartArrowDown} />
              </ICON>
            </BOX>
            <BOX  style={{border: "1px  solid black" }} width="45">
              <BUTTON name="FILTER" onClick={this.ONCHANGE}>
                <h3 className="TITL">SORT</h3>
              </BUTTON>
            </BOX>
          </FILTER_SORT>

          <div
            style={{
              display: this.state.CART_display ? "block" : "none",
            }}
          >
            <div>
              {this.props.TOTALINCART.length > 0 ? (
                this.props.TOTALINCART.map((item) => (
                  <div>
                    <div>ITEM NAME : {item.title}</div>
                    <div>ITEM QUANTITY : {item.Quantity}</div>
                  </div>
                ))
              ) : (
                <h5>your cart is empty</h5>
              )}
            </div>

            <Link to={`/CARTPAGE`}>
              <button style={{ backgroundColor: "pink" }}>
                <h5>CHECK OUT ALL ITEM</h5>
              </button>
            </Link>
          </div>

          <div
            style={{
              display: this.state.display ? "block" : "none",
            }}
            className="FILTER_ITEMBOX"
          >
            <div className="FILTER_LIST">
              <div className="DESCRI_FILTERITEM">
                <input type="Checkbox" />
                <div>
                  <h5 className="TITL">PRICE--HIGH TO LOW</h5>
                </div>
              </div>
              <div className="DESCRI_FILTERITEM">
                <input
                  onChange={this.HIGH_PRICECHANGE}
                  type="Checkbox"
                  checked={this.state.Check}
                />
                <div>
                  <h5 className="TITL">PRICE--HIGH TO HIGH</h5>
                </div>
              </div>
              <div className="DESCRI_FILTERITEM">
                <input type="Checkbox" />
                <div>
                  <h5 className="TITL">LETEST ARRIVl</h5>
                </div>
              </div>
            </div>
          </div>
        </MAIN_BOX_OF_FILTER>

        {/* Product contanait */}

        {/*fliter conterainar  */}

        {/*proct item   */}

        <DISPLAY_ITEM width="100" column="column">
          {this.state.DAT.map((x) => (
            <DESCRIPTIONBOX Itam={x} PIC={DATA2} No={No_OF_ITEM} />
          ))}
        </DISPLAY_ITEM>

        {/* Procuact containa r not touch  */}
      </div>
    );
  }
}

const mapStateToprops = (state) => {
  return {
    DATA: state.CARTDATA.DATA,
    CARTITEM: NO_OFITEM(state),
    TOTALINCART: TOTALINCART(state),
  };
};

export default connect(mapStateToprops, null)(Prouctartical);




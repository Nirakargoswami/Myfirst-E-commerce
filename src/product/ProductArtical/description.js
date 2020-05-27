import React, { Component } from "react";
import "/home/bhumika/nirakar/travell-app/src/product/product.css";
import { BUYNOW } from "../product_action";
import { connect } from "react-redux";
import { ADDTOCART } from "../product_action";
import { Link } from "react-router-dom";
import{BOX} from "../../allcomponent/newcomonent"
import {
  MAIN_ITEM_BOX,
  Description,
  IMAGE_BOX,
  PRODUCT_IMAGE,
  BUTTON_CONTANIAR,
  BUTTON_BYNOW,
  BUTTON_ADDTOCART,
} from "../../landigpage/landigpage_STYLE";
class description extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }





  render() {
    console.log(this.props.ITEMDATA);
    console.log(this.props.Itam.title)
    console.log(this.props.Itam)
  console.log(this.props.No)
   
   



    return (
      <MAIN_ITEM_BOX    width={this.props.No}>
        <IMAGE_BOX width="40">
          <PRODUCT_IMAGE
            key={this.props.Itam.indexValue}
            src={this.props.PIC}
            alt=""
          ></PRODUCT_IMAGE>
        </IMAGE_BOX>

        <Description column="column" key={this.props.Itam.indexValue}>
          <div className="CHEC" style={{ width: "100%" }}>
            <h4 className="TITLE" key={this.props.Itam.indexValue}>
              {this.props.Itam.title}
            </h4>
          </div>
          <div className="DESCRI_Item">
            <div>
              <div>
                <h5
                  style={{
                    backgroundColor: "green",
                    margin: " 0em 0.4em 0 0.4em",
                  }}
                  className="TITLE"
                >
                  {this.props.Itam.rating}
                </h5>
              </div>
            </div>
            <div style={{ width: "70%" }}>
              <h5 className="TITLE">{this.props.Itam.reviews}</h5>
            </div>
          </div>
          <div className="DESCRI_Ite">
            <div className="CARD">
              <h5
                style={{
                  backgroundColor: "gray",
                }}
                className="TITL"
              >
                {this.props.Itam.sellingPrice}
              </h5>
            </div>

            <div className="CARD">
              <h5 style={{ textDecoration: " line-through" }} className="TITL">
                {this.props.Itam.scratchedPrice}
              </h5>
            </div>
            <div className="CARD">
              <h5
                style={{
                  backgroundColor: "green",
                }}
                className="TITL"
              >
                {this.props.Itam.discountPercentage}
              </h5>
            </div>
          </div>
          <BUTTON_CONTANIAR>
            <BOX   width="50">
              <BUTTON_ADDTOCART
                color="Black"
                onClick={() => this.props.ADDTOCART(this.props.Itam.title)}
              > <h9>add cart</h9>
                
              </BUTTON_ADDTOCART>
            </BOX>
            <BOX width="50">
            
              <Link to={`/CARTPAGE/`}>
                <BUTTON_BYNOW
                  onClick={() => this.props.Buynow(this.props.Itam.title)}
                >
                  Buy now
                </BUTTON_BYNOW>
              </Link>
            </BOX>
          </BUTTON_CONTANIAR>
        </Description>
      </MAIN_ITEM_BOX>
    );
  }
}
const mapDispatchToProps = (Dispatch) => {
  return {
    Buynow: (Item) => Dispatch(BUYNOW(Item)),
    ADDTOCART: (payload) => Dispatch(ADDTOCART(payload)),
   
  };
};
const mapStatetoProps = (state) => {
  return {
    ITEMDATA: state.CARTDATA.CARTITEM

  };

}
export default connect(mapStatetoProps, mapDispatchToProps)(description);

import React, { Component } from "react";
import Stripecheckoutbutton from "./payment"
import { CLEANUP } from "../product/product_action";
import { TOTALINCART } from "../product/ProductUTILIT"
import  {NO_OFITEM}  from "../product/ProductUTILIT";
import {connect} from "react-redux"
class Cartpage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillUnmount() {
    this.props.CLEAN();
  }

  render() {
   console.log(this.props.NEWPRICE)
    const DATA = this.props.TOTALINCART[0]; ;
    const Image = DATA.images[0];
     const price = DATA.sellingPrice.replace(/[,₹]/g, "");
    console.log(this.props.ITEMDATA);
    console.log();
    return (
      <div>
        <div>
          <h3>ITEM NAME </h3>
        </div>
        <div>{DATA.title}</div>
        <div>
          <img src={Image} alt="pic" />
          <div> PRICE :{  price}</div>
          <div> QUANTITY OF ITEM : {DATA.Quantity}</div>
          <div>TOTAL:{price * DATA.Quantity}</div>
          <div>
            <Stripecheckoutbutton price={(price * DATA.Quantity)} />
          </div>
          <div>YAMI chaudhary is hear</div>
        </div>
        <div>{}</div>
      </div>
    );
  }
}

const mapDispachToprops = (Dispatch) => {
  return {
    CLEAN : () => Dispatch(CLEANUP())
  }
}
const mapStateToProps =(state ) => {
    return {
      ITEMDATA: state.CARTDATA.CARTITEM,
      NEWPRICE: NO_OFITEM(state),
      TOTALINCART: TOTALINCART(state)
    };
}
export default connect(mapStateToProps,mapDispachToprops)(Cartpage)

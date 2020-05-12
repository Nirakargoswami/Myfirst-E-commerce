import DATA from "../alldata/alldata";
import { utiliti } from "../product/Productheader/utiliti";
import { Buyitem } from "../product/Productheader/utiliti";
 export const Intialstate = {
  DATA: [],
  CARTITEM: [],
};
const Product_DATA = (state = Intialstate, action) => {
  switch (action.type) {
    case "Get_data":
      return { ...state, DATA: DATA };
    case "ADDTOCART":
      return {
        ...state,
        CARTITEM: state.CARTITEM.concat(utiliti(action.Payload)),
      };
    case "BUYNOW":
      return {
        ...state,
        CARTITEM: Buyitem(action.Payload),
      };
    default:
      return state;
  }
  
};
export default Product_DATA;

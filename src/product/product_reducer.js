import DATA from "../alldata/alldata";
import { utiliti } from "../product/Productheader/utiliti";
import  Buyitem  from "../product/Productheader/ONEMORE";
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
        CARTITEM: utiliti(action.Payload, state.CARTITEM,state.DATA),
      };
    case "BUYNOW":
      return {
        ...state,
        CARTITEM: Buyitem(action.Payload),
      };
    case "CLEANUP": {
      return {
        ...state,
        CARTITEM: [],
      };
    }
    default:
      return state;
  }
  
};
export default Product_DATA;

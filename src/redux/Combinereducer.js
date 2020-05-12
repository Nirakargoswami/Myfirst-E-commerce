import Courrentuser from "./reduser";
 import CARTDATA from "../product/product_reducer";
import {persistReducer  } from "redux-persist";

import storage from "redux-persist/lib/storage"

import { combineReducers } from "redux";

const persisitconfiguration = {
  key: "root",
  storage,
  whitelist: ["CARTDATA"],
};



 const Allreducer = combineReducers({
         Courrentuser,
         CARTDATA
       });


       export default persistReducer(persisitconfiguration,Allreducer)
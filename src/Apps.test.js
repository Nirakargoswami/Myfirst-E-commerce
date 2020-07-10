import React from "react";
import { shallow, mount } from "enzyme";

import {BUYNOW} from "./product/product_action"
import NEW from "./Propscomponetn"

import Product_DATA from "./product/product_reducer"






let COSNTStent;


beforeEach(() => {

  const PROPS = {props:{color:"black"}}; 
  COSNTStent = mount(<NEW props={PROPS} />);

})


  it("lets see  function is working or not " , () => {

    
     let tree = COSNTStent
     expect(tree).toMatchSnapshot();


  }


  )

   it("lets see  function is working or not ", () => {


     let tree = COSNTStent;
     expect(tree).toMatchSnapshot();
   });


   it("lets see  function is working  ", () => {
     const PROPS = { props: { color: "black" } }; 
     expect(shallow(<NEW props={PROPS} />).state()).toEqual({ color: "black" });
   });




const intialstate = {
  
  DATA: [],
  CARTITEM: [],

}
   it("lets check reducer test wrolimng or not " , () => {
     console.log(Product_DATA)
     console.log(BUYNOW)
   expect(
     Product_DATA(intialstate, {
       type: "BUYNOW",
      Payload : ""
     })
   ).toEqual({
     DATA: [],
     CARTITEM: [],
     ispadimg: "true"
   });
   }
    
   )

     

   it("lets check action is working  not ",() => {
const  Payload = "Nirakar"
    const Actiondata = {
      type: "BUYNOW",
      Payload: Payload
    };
  
 expect(BUYNOW(Payload)).toEqual(Actiondata)

   })
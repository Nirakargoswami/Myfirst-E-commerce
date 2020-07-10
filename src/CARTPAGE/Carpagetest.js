import Stripecheckoutbutton from "./payment";
import { BUTTON, INPUT, BOX } from "../allcomponent/newcomonent";
import React from 'react';

const Carpagetest = ({props}) => {
  console.log(props);

  console.log(props.TOTALINCART);
  const DATA = props.TOTALINCART[0];

  const Image = DATA.images[0];
const NEWPRICE = props.NEWPRICE;
  return (
    <div>
      <div>
          <h1>nifnasdf</h1>
        <INPUT type="text" placeholder="SEARCH YOUR ITEM here" />
        <h3>ITEM NAME </h3>
      </div>
      <div>{DATA.title}</div>
      <div>
        <img src={Image} alt="pic" />
        <div> PRICE :{NEWPRICE}</div>
        <div> QUANTITY OF ITEM : {DATA.Quantity}</div>
        <div>TOTAL:{NEWPRICE * DATA.Quantity}</div>
        <div>
          <Stripecheckoutbutton price={NEWPRICE * DATA.Quantity} />
        </div>
        <div>YAMI chaudhary is hear</div>
      </div>
      <BUTTON color="Black">BUY NOW</BUTTON>
      <BUTTON>ADD TO CART</BUTTON>

      <BOX width="50">s</BOX>
      <BOX width="20">s</BOX>
    </div>
  );
};

export default Carpagetest;

import { createSelector } from "reselect";

const CARTSELECTOR = (state) => state.CARTDATA;

export const CARTITEM = createSelector([CARTSELECTOR], (item) => item.CARTITEM);

export const NO_OFITEM = createSelector([CARTITEM], (item) =>
item.reduce((x,y) => (x + y.Quantity),0)
);

export const TOTALINCART = createSelector(
  [CARTITEM],
  (item) =>  item.map((item) => item )

);

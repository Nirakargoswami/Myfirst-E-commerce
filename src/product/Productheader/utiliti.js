import DATA from "../../alldata/alldata";

export const utiliti = (props, dATA) => {
   
const NewDATA = [] ;

  const REGX = /[/]/gi;

  

  
     DATA.map((ITEM) =>
        ITEM.map((item) =>
          item.title.toLowerCase().replace(REGX, "") ===
          props.toLowerCase().replace(REGX, "")
            ? NewDATA.push({ ...item, Quantity: 1 })
            : null
        )
      );

  return NewDATA;
};

export const Buyitem = (item) => {
  const ITEMDATA = [];

  const REGX = /[/]/gi;
  DATA.map((ITEM) =>
    ITEM.map((itam) =>
      itam.title.toLowerCase().replace(REGX, "") ===
      item.title.toLowerCase().replace(REGX, "")
        ? ITEMDATA.push({ ...itam, Quantity: 1 })
        : null
    )
  );


  return {
    ITEMDATA,
  };
};

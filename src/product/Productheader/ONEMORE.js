import DATA from "../../alldata/alldata"

 const Buyitem = (props) => {
  const ITEMDATA = [];

  const REGX = /[/]/gi;

  DATA.map((ITEM) =>
    ITEM.map((itam) =>
      itam.title.toLowerCase().replace(REGX, "") ===
      props.toLowerCase().replace(REGX, "")
        ? ITEMDATA.push({ ...itam, Quantity: 1 })
        : null
    )
  );

  return (
      ITEMDATA
  )
};
export default Buyitem;
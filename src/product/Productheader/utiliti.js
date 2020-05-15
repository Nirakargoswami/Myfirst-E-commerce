

export const utiliti = (props, Data,DATA) => {
  const NewDATA = [];

  const REGX = /[/]/gi;

  const NEWDATA = Data.find(
    (item) =>
      item.title.toLowerCase().replace(REGX, "") ===
      props.toLowerCase().replace(REGX, "")
  );
  NEWDATA
    ? Data.map((item) => NewDATA.push({ ...item, Quantity: item.Quantity + 1 }))
    : DATA.map((ITEM) =>
        ITEM.map((item) =>
          item.title.toLowerCase().replace(REGX, "") ===
          props.toLowerCase().replace(REGX, "")
            ? NewDATA.push({ ...item, Quantity: 1 })
            : null
        )
      );

  return (
    
    NewDATA
  );
};


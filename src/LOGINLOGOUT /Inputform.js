import React from "react";

const Inputform = (props) => {
  return (
    <div>
  <input type={props.type}  value={props.value} name={props.name} onChange={props.change}  />
  
    </div>
  );
};

export default Inputform;

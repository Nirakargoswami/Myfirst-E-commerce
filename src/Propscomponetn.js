import React, { Component } from "react";
import Newcomponetn from "./Newcomponent"


class propscomponetn extends Component {
 state = {
      color: "black",
    };
  render() {
     
     
   
             return (
               <div>
                 <Newcomponetn   props={this.state.color}/>
               </div>
             );
           }
}

export default propscomponetn;

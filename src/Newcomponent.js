

import React, { Component } from 'react';

class Newcomponent extends Component {
 state ={

 }
    render() {
        console.log(this.props.props)
        const PROPS = this.props.props 
        return (
            <div>
                <h1 style={{color : PROPS === "black" ? "black" : "green"}}  >Niralar</h1>
            </div>
        );
    }
}

export default Newcomponent;




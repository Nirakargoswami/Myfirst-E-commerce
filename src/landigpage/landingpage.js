
import React, { Component } from 'react';
import Header from "./landigpage_header"

class landingpage extends Component {
constructor(props) {
    super(props)
    this.state = {

    }
}



    render() {
        return (
            <div>
            <Header 
            Change = {this.props.Change}
            /> 
            </div>
        );
    }
}

export default landingpage;

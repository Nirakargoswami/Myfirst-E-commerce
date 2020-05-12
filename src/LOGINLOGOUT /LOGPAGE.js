import React, { Component } from 'react';
import LOGINPAGE from "./LOGINPAGE"
import LOGOUT from "./LOGOUT"
class LOGINLOGOUT extends Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }
    
    render() {
console.log(this.props)
        return (
            <div>
    
            
            <LOGINPAGE  user={(this.props)} />
            <LOGOUT/>
            </div>
        );
    }
}

export default LOGINLOGOUT;

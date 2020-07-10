import React, { Component } from "react";
import LOGINPAGE from "./LOGINPAGE";
import LOGOUT from "./LOGOUT";
import { useParams } from "react-router";
import { faClosedCaptioning } from "@fortawesome/free-solid-svg-icons";
class LOGINLOGOUT extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <LOGINPAGE user={this.props} />
        <LOGOUT />
      </div>
    );
  }
}

export default LOGINLOGOUT;

/* eslint-disable no-undef */
import React, { Component } from "react";
import "./headre.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BAR from "/home/bhumika/nirakar/travell-app/src/menu.svg";

import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  Containar,
  ICON,
  BOX,
  IMAGE,
  INPUT,
  
  SEARCHBOX_CONTAINE,
  
} from "../newcomonent";

import {
  HEADER_SEARCHBOX,
  HEADER_LOGOBOX,
  HEADER_LINKS,
  HEADER
} from "./hearder_style";
import { connect } from "react-redux";
import {
  faHome,
  faCartArrowDown,
  faSearch,
  faSdCard,
  faBell
} from "@fortawesome/free-solid-svg-icons";
import LOGOIMAGE from "/home/bhumika/nirakar/travell-app/src/LOGO.svg";
import { auth } from "../../Firebaseconfiguration/firebase";

library.add(faHome, faCartArrowDown, faSearch, faSdCard);

class header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
    };
  }

  Change = (e) => {
    this.props.Change(e);
  };

  render() {
    console.log(this.props.MYuser);
    console.log("checking user input");

    return (
      <HEADER column="column" width="100">
        <Containar width="100" style={{ alignItems: "center" }}>
          <HEADER_LOGOBOX width="50">
            <Containar style={{ alignItems: "center" }}>
              <BOX width="20">
                <ICON width="3">
                  <IMAGE src={BAR}></IMAGE>
                </ICON>
              </BOX>
              <BOX width="80">
                <ICON width="8">
                  <IMAGE src={LOGOIMAGE}></IMAGE>
                </ICON>
              </BOX>
            </Containar>
          </HEADER_LOGOBOX>
          <HEADER_SEARCHBOX display="none" width="90">
            <BOX width="90">
              <INPUT
                value={this.state.target}
                onChange={this.Change}
                width="100"
                placeholder="sercehe here products and item"
              ></INPUT>
            </BOX>
            
          </HEADER_SEARCHBOX>
          <HEADER_LINKS width="50">
            <Containar style={{ alignItems: "center" }}>
              <BOX width="20">
                <ICON width="5">
                  <FontAwesomeIcon icon={faHome} />
                </ICON>
              </BOX>
              <BOX width="20">
                <ICON width="8">
                  <FontAwesomeIcon icon={faCartArrowDown} />
                </ICON>
              </BOX>
              <BOX width="20">
                <ICON width="8">
                  <FontAwesomeIcon icon={faBell} />
                </ICON>
              </BOX>
              <BOX width="40">
                {this.props.MYuser ? (
                  <button onClick={() => auth.signOut()}>Sign Out</button>
                ) : (
                  <Link to="/LOGPAGE">
                    <ICON width="2">
                      <h5>LOG IN</h5>
                    </ICON>
                  </Link>
                )}
              </BOX>
            </Containar>
          </HEADER_LINKS>
        </Containar>
        <SEARCHBOX_CONTAINE>
          <BOX width="90">
            <INPUT
              value={this.state.target}
              onChange={this.Change}
              width="100"
              placeholder="sercehe here products and item"
            ></INPUT>
          </BOX>
          <BOX width="10">
            <ICON width="8">
              <FontAwesomeIcon icon={faSearch} />
            </ICON>
          </BOX>
        </SEARCHBOX_CONTAINE>
      </HEADER>
    );
  }
}
const mapStateToprops = (state) => {
  return {
    MYuser: state.Courrentuser.User,
  };
};

export default connect(mapStateToprops)(header);









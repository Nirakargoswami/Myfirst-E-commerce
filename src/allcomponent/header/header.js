/* eslint-disable no-undef */
import React, { Component } from "react";
import "./headre.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Bar from "/home/bhumika/nirakar/travell-app/src/bar.svg";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { connect } from "react-redux";
import {
  faHome,
  faCartArrowDown,
  faSearch,
  faSdCard,
} from "@fortawesome/free-solid-svg-icons";
import LOGOIMAGE from "/home/bhumika/nirakar/travell-app/src/logo.png";
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
      <div className="Mainbox">
        <div className=" Navigation contaniar ">
          <div className="box2  Center contaniar">
            <div className="box1 Logo ">
              <img src={Bar} alt="" />
            </div>
            <div className="box3">
              <img className="Logo" src={LOGOIMAGE} alt="flipcart" />
            </div>
          </div>
          <div className="box2 contaniar Spacearround Center">
            <div className="box1">
              <button>
                <FontAwesomeIcon icon={faHome} />
              </button>
            </div>
            <div className="box1">
              <button>
                <FontAwesomeIcon icon={faHome} />
              </button>
            </div>

            <div className="box1">
              <button>
                <FontAwesomeIcon icon={faHome} />
              </button>
            </div>
            <div className="box1">
              <button>
                <FontAwesomeIcon icon={faCartArrowDown} />
                <span className="span">5</span>
              </button>
            </div>

            <div className="box1">
              {this.props.MYuser ? (
                <button onClick={() => auth.signOut()}>Sign Out</button>
              ) : (
                <Link to="/LOGPAGE">
                  <button>Sign in</button>
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className="Searchebox">
          <input
            className="Input"
            type="text"
            placeholder="sercehe here products and item "
            onChange={this.Change}
          />

          <div className="box1">
            <button>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToprops = (state) => {
  return {
    MYuser: state.Courrentuser.User,
  };
};

export default connect(mapStateToprops)(header);

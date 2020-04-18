/* eslint-disable no-undef */
import React, { Component } from "react";
import "./headre.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bar from '../../bar.svg'
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faCartArrowDown,
  faSearch,
  faSdCard  ,
} from "@fortawesome/free-solid-svg-icons";
import LOGOIMAGE from "/home/bhumika/nirakar/travell-app/src/logo.png";
library.add(faHome, faCartArrowDown, faSearch, faSdCard);

export default class header extends Component {
  render() {
    return (
      <div className="Mainbox">
        <div className=" Navigation contaniar ">
          <div className="box2  Center contaniar">
            <div className="box1 Logo ">
              <bar />
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
              </button>
            </div>
          </div>
        </div>
        <div className="Searchebox">
          <input
            className="Input"
            type="text"
            placeholder="sercehe here products and item "
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

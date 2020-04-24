import React, { Component } from "react";
import "/home/bhumika/nirakar/travell-app/src/product/product.css";
import DESCRIPTIONBOX from "./description";

export default class Prouctartical extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DATA: [],
      image: [],
      display: false,
      Check: false,
    };
  }

  componentDidMount() {
    this.setState({ DATA: this.props.DATA });
    this.setState({ image: this.props.DATA[0].images });
  }
  ONCHANGE = () => {
    this.setState(
      (previous) => ({
        display: !previous.display,
      }),
      console.log("this is callback function")
    );
  };

  HIGH_PRICECHANGE = (previous) => {
    this.setState((previous) => ({
      DATA: this.state.DATA.sort(
        (x, y) =>
          parseInt(x.sellingPrice.replace(/[,₹]/g, "")) -
          parseInt(y.sellingPrice.replace(/[,₹]/g, ""))
      ),
      Check: !previous.Check,
    }));
  };

  render() {
    const DATA2 = this.state.image[0];

    console.log(this.state.DATA);
    return (
      <div>
        <div className="STICKY_CARD">
          <div className="Mainbox_Filter">
            <div className="FILTER_BOX">
              <button>
                <h3 className="TITL">FILTER</h3>
              </button>
            </div>
            <div className="FILTER_BOX">
              <button name="FILTER" onClick={this.ONCHANGE}>
                <h3 className="TITL">SORT</h3>
              </button>
            </div>
          </div>
          <div
            style={{
              display: this.state.display ? "block" : "none",
            }}
            className="FILTER_ITEMBOX"
          >
            <div className="FILTER_LIST">
              <div className="DESCRI_FILTERITEM">
                <input type="Checkbox" />
                <div>
                  <h5 className="TITL">PRICE--HIGH TO LOW</h5>
                </div>
              </div>
              <div className="DESCRI_FILTERITEM">
                <input
                  onChange={this.HIGH_PRICECHANGE}
                  type="Checkbox"
                  checked={this.state.Check}
                />
                <div>
                  <h5 className="TITL">PRICE--HIGH TO HIGH</h5>
                </div>
              </div>
              <div className="DESCRI_FILTERITEM">
                <input type="Checkbox" />
                <div>
                  <h5 className="TITL">LETEST ARRIVl</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="CHECK  Mainbox_Product">
          {/* Product contanait */}

          {/*fliter conterainar  */}

          {/*proct item   */}

          <div className="Mainbox_Item">
            {this.state.DATA.map((x) => (
              <DESCRIPTIONBOX Itam={x} PIC={DATA2} />
            ))}
          </div>

          {/* Procuact containa r not touch  */}
        </div>
      </div>
    );
  }
}

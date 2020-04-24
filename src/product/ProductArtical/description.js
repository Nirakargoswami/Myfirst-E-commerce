import React, { Component } from "react";
import "/home/bhumika/nirakar/travell-app/src/product/product.css";

export default class description extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div key={this.props.Itam.indexValue} className="Item">
          <div key={this.props.Itam.indexValue} className="Product_Imagebox">
            <img
              key={this.props.Itam.indexValue}
              className="Image"
              src={this.props.PIC}
              alt=""
            />
          </div>
          <div key={this.props.Itam.indexValue} className="Product_Description">
            <div className="CHEC" style={{ width: "100%" }}>
              <h4 className="TITLE" key={this.props.Itam.indexValue}>
                {this.props.Itam.title}
              </h4>
            </div>
            <div className="DESCRI_Item">
              <div>
                <div>
                  <h5
                    style={{
                      backgroundColor: "green",
                      margin: " 0em 0.4em 0 0.4em",
                    }}
                    className="TITLE"
                  >
                    {this.props.Itam.rating}
                  </h5>
                </div>
              </div>
              <div style={{ width: "70%" }}>
                <h5 className="TITLE">{this.props.Itam.reviews}</h5>
              </div>
            </div>
            <div className="DESCRI_Ite">
              <div className="CARD">
                <h5
                  style={{
                    backgroundColor: "gray",
                  }}
                  className="TITL"
                >
                  {this.props.Itam.sellingPrice}
                </h5>
              </div>

              <div className="CARD">
                <h5
                  style={{ textDecoration: " line-through" }}
                  className="TITL"
                >
                  {this.props.Itam.scratchedPrice}
                </h5>
              </div>
              <div className="CARD">
                <h5
                  style={{
                    backgroundColor: "green",
                  }}
                  className="TITL"
                >
                  {this.props.Itam.discountPercentage}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

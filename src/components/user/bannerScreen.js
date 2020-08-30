import React, { Component } from "react";
import "./banner.css";

class BannerScreen extends Component {
  render() {
    return (
      <div className="banner">
          <div className="left-banner">
            <div>Good morning,Ticket Seekers</div>
            <div>Do you want to back Hometown with Good Deal</div>
            <div>Login And Register Now</div>
          </div>
          <div className="right-banner">
            <div className="img-container">
              <img src={require("../../asset/portal.png")} />
              <img src={require("../../asset/portal.png")} />
            </div>       
          </div>
      </div>
    );
  }
}
export default BannerScreen;

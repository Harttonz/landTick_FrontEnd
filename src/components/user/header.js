import React, { Component } from "react";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="greet">Good morning,Ticket Seekers</div>
        <div className="offer">Do you want to back Hometown with Good Deal</div>
        <div className="log">Login And Register Now</div>
        <img src={require("../../img/portal.png")} className="banner1"/>
        <img src={require("../../img/portal.png")} className="banner2"/>
      </div>
    );
  }
}

export default Header;

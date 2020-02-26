import React, { Component } from "react";
import "./beranda.css";
import Footer from "./footer";
import ModalLogin from './modalLogin';
import Register from "./Register";

export default class Beranda extends Component {
  render() {
    return (
      <div className="bckgrdmainmenu">
        <div className="judul">
          <h1>On Finder </h1>
        </div>

        <div className="homeText">
          <h2>
            Swipe <span>Right</span>
          </h2>
          <h2>
            Make your pet <span>Happy</span>
          </h2>
          <ModalLogin />
          <Register />
        </div>
        <div className="info">
          <p className="text2">
            By clicking enter,you agree to our term,Learn how we process your
            data in our privacy policy,And Cookie policy
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}

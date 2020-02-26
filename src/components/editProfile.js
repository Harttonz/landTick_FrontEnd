import React, { Component } from "react";
import "./editprofile.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
export default class EditProfile extends Component {
  render() {
    return (
      <>
        <div className="edSidebar-left">
          <nav className="edSiderUp">
            <Link to="/dashboard">
              <img
                src={require("../img/icon/arrowleft.png")}
                className="edArrowleft"
              ></img>
            </Link>
            <img
              src={require("../img/bgCat.jpg")}
              className="edImageProfile"
            ></img>
            <p className="edProfilPet">Edit Profile Pet</p>
          </nav>
          <div className="edSiderBottom">
            <div className="edBoxacset1">
              <p className="edAcset1">Account Settings</p>
            </div>
            <div className="edLayoutp1">
              <p className="edEmail1">Email</p>
              <p className="edEmail2">Harttonzzurkerbeg@gmail.com</p>
              <hr className="edCrossline"></hr>
              <p className="edPhone1">Phone</p>
              <p className="edPhone2">0895332018884</p>
            </div>
            <div className="edBoxacset2">
              <p className="edAcset2"> Discovery Settings</p>
            </div>
            <p className="edMaxdist">Maximum distance</p>
            <p className="edKm">10 km</p>
            <input
              type="range"
              min="1"
              max="100"
              className="edDistance"
            ></input>
            <div className="prAge">Age</div>
            <br></br>
            <select className="edSelect1" width="150px">
              <option value="child">Child</option>
              <option value="teenager">Teenager</option>
              <option value="Adult">Adult</option>
            </select>
            <div className="prSpecies">Spicies</div>
            <select className="edSelect2" width="150px">
              <option value="Cat">Cat</option>
              <option value="Dog">Dog</option>
              <option value="Rabit">Rabit</option>
              <option value="Sugar glider">Sugar glider</option>
            </select>

            <Link to="/">
                <button type="button" className="edBtnlogout">
                  Logout
                </button>
            </Link>
          </div>
        </div>
        <div className="edSidebar-right">
          <div className="edTedit">
            <div className="edContainer">
              <div className="row">
                <div className="col-md-4">
                  <img
                    src={require("../img/image1.jpg")}
                    className="edImg-responsive"
                  ></img>
                  <img src={require("../img/icon/x.png")} className="adX"></img>
                </div>
                <div className="col-md-4">
                  <img className="edImg-responsive"></img>
                  <img
                    src={require("../img/icon/plus.png")}
                    className="edImg-responsive"
                    className="adPlus"
                  ></img>
                </div>
                <div className="col-md-4">
                  <img className="edImg-responsive"></img>
                  <img
                    src={require("../img/icon/plus.png")}
                    className="edPlus"
                  ></img>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <img className="edImg-responsive"></img>
                  <img
                    src={require("../img/icon/plus.png")}
                    className="edPlus"
                  ></img>
                </div>
                <div className="col-md-4">
                  <img className="adImg-responsive"></img>
                  <img
                    src={require("../img/icon/plus.png")}
                    className="edPlus"
                  ></img>
                </div>
                <div className="col-md-4">
                  <img className="adImg-responsive"></img>
                  <img
                    src={require("../img/icon/plus.png")}
                    className="edPlus"
                  ></img>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <img className="adImg-responsive"></img>
                  <img
                    src={require("../img/icon/plus.png")}
                    className="edPlus"
                  ></img>
                </div>
                <div className="col-md-4">
                  <img className="adImg-responsive"></img>
                  <img
                    src={require("../img/icon/plus.png")}
                    className="edPlus"
                  ></img>
                </div>
                <div className="col-md-4">
                  <img className="adImg-responsive"></img>
                  <img
                    src={require("../img/icon/plus.png")}
                    className="edPlus"
                  ></img>
                </div>
              </div>
            </div>
            <div className="edInfo">
                <b>Nama pet</b>
              <input type="text" placeholder="Brizkel" className="edInput"></input>
              <label>
                <b>Feeder</b>
              </label>
              <input
                type="text"
                placeholder="Hartonz Zurkerberg"
                className="edInput"
              ></input>
              <label>
                <b>Gender</b>
              </label>
              <input
                type="text"
                placeholder="Gender"
                className="edInput"
              ></input>
              <label>
                <b>Age Pet</b>
              </label>
              <input
                type="text"
                placeholder="Age pet"
                className="edInput"
              ></input>
              <label>
                <b>About Pet</b>
              </label>
              <textarea
                placeholder="Give information about your pet here,thus when someone will get about information about your pet"
                className="edArea"
              ></textarea>
            </div>
            <div className="edDivbtnsave">
              <button type="submit" className="edBtnsave">
                Save
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

import React,{Component} from 'react';
import './Addpet.css';
import {Button} from "react-bootstrap";
import{Link} from "react-router-dom";
export default class Addpet extends Component{
  render(){
    return (
      <>
        <div className="adSidebar-left">
          <nav className="adSiderUp">
            <Link to="/dashboard">
              <img
                src={require("../img/icon/arrowleft.png")}
                className="adArrowleft"
              ></img>
            </Link>
            <img
              src={require("../img/bgCat.jpg")}
              className="adImageProfile"
            ></img>
            <p className="adProfilPet">Add Pet</p>
          </nav>
          <div className="adSiderBottom">
            <div className="adBoxacset1">
              <p className="adAcset1">Account Settings</p>
            </div>
            <div className="adLayoutp1">
              <p className="adEmail1">Email</p>
              <p className="adEmail2">Harttonzzurkerbeg@gmail.com</p>
              <hr className="adCrossline"></hr>
              <p className="adPhone1">Phone</p>
              <p className="adPhone2">0895332018884</p>
            </div>
            <div className="adBoxacset2">
              <p className="adAcset2"> Discovery Settings</p>
            </div>
            <p className="adMaxdist">Maximum distance</p>
            <p className="adKm">10 km</p>
            <input
              type="range"
              min="1"
              max="100"
              className="adDistance"
            ></input>
            <div className="adOld">
              <div className="">Age</div>
              <br></br>
              <select className="adSelect" width="150px">
                <option value="child">Child</option>
                <option value="teenager">Teenager</option>
                <option value="Adult">Adult</option>
              </select>
              <br></br>
            </div>
            <div className="adSpecies">Spicies</div>
            <br></br>
            <select class="adSelect" width="150px">
              <option value="Cat">Cat</option>
              <option value="Dog">Dog</option>
              <option value="Rabit">Rabit</option>
              <option value="Sugar glider">Sugar glider</option>
            </select>
            <Link to="/">
              <div className="adDivbtnlogout">
                <button type="button" className="adBtnlogout">
                  Lagout
                </button>
              </div>
            </Link>
          </div>
        </div>
        <div className="adSidebar-right">
          <div className="adTedit">
            <div className="adContainer">
              <div className="row">
                <div className="col-md-4">
                  <img
                    src={require("../img/image1.jpg")}
                    className="adImg-responsive"
                  ></img>
                  <img src={require("../img/icon/x.png")} className="adX"></img>
                </div>
                <div className="col-md-4">
                  <img className="adImg-responsive"></img>
                  <img
                    src={require("../img/icon/plus.png")}
                    className="adImg-responsive"
                    className="adPlus"
                  ></img>
                </div>
                <div className="col-md-4">
                  <img className="adImg-responsive"></img>
                  <img
                    src={require("../img/icon/plus.png")}
                    className="adPlus"
                  ></img>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <img className="adImg-responsive"></img>
                  <img
                    src={require("../img/icon/plus.png")}
                    className="adPlus"
                  ></img>
                </div>
                <div className="col-md-4">
                  <img className="adImg-responsive"></img>
                  <img
                    src={require("../img/icon/plus.png")}
                    className="adPlus"
                  ></img>
                </div>
                <div className="col-md-4">
                  <img className="adImg-responsive"></img>
                  <img
                    src={require("../img/icon/plus.png")}
                    className="adPlus"
                  ></img>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <img className="adImg-responsive"></img>
                  <img
                    src={require("../img/icon/plus.png")}
                    className="adPlus"
                  ></img>
                </div>
                <div className="col-md-4">
                  <img className="adImg-responsive"></img>
                  <img
                    src={require("../img/icon/plus.png")}
                    className="adPlus"
                  ></img>
                </div>
                <div className="col-md-4">
                  <img className="adImg-responsive"></img>
                  <img
                    src={require("../img/icon/plus.png")}
                    className="adPlus"
                  ></img>
                </div>
              </div>
            </div>
            <div className="adInfo">
              <div className="nmpet">
                <b>Nama pet</b>
              </div>
              <br></br>
              <input type="text" placeholder="Brizkel"></input>
              <label>
                <b>Feeder</b>
              </label>
              <input
                type="text"
                placeholder="Hartonz Zurkerberg"
                className="adInput"
              ></input>
              <label>
                <b>Gender</b>
              </label>
              <input
                type="text"
                placeholder="Gender"
                className="adInput"
              ></input>
              <label>
                <b>Age Pet</b>
              </label>
              <input
                type="text"
                placeholder="Age pet"
                className="adInput"
              ></input>
              <label>
                <b>About Pet</b>
              </label>
              <textarea
                placeholder="Give information about your pet here,thus when someone will get about information about your pet"
                className="adArea"
              ></textarea>
            </div>
            <div className="adDivbtnsave">
              <button type="submit" className="adBtnsave">
                Save
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
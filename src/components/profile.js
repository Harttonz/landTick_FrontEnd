import React,{Component} from "react";
import "./profile.css";
import {Card,Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import Payment from "../components/payment";
export default class Profile extends Component{

    render(){
    return (
      <div className="profile">
        <div className="prSidebar-left">
          <nav className="prSiderUp">
            <Link to="/dashboard">
              <img
                src={require("../img/icon/arrowleft.png")}
                className="prArrowleft"
              ></img>
            </Link>

            <img
              src={require("../img/bgCat.jpg")}
              className="prImageProfile"
            ></img>
            <p className="prProfilPet">Profile Pet</p>
          </nav>
          <div className="prSiderBottom">
            <div className="prBoxacset1">
              <p className="prAcset1">Account Settings</p>
            </div>
            <div className="prLayoutp1">
              <p className="prEmail1">Email</p>
              <p className="prEmail2">Harttonzzurkerbeg@gmail.com</p>
              <hr className="prCrossline"></hr>
              <p className="prPhone1">Phone</p>
              <p className="prPhone2">0895332018884</p>
            </div>
            <div className="prBoxacset2">
              <p className="prAcset2"> Discovery Settings</p>
            </div>
            <p className="prMaxdist">Maximum distance</p>
            <p className="prKm">10 km</p>
            <input
              type="range"
              min="1"
              max="100"
              className="prDistance"
            ></input>
            <div className="prAge">Age</div>
            <br></br>
            <select className="prSelect1" width="150px">
              <option value="child">Child</option>
              <option value="teenager">Teenager</option>
              <option value="Adult">Adult</option>
            </select>
            <div className="prSpecies">Spicies</div>
            <select className="prSelect2" width="150px">
              <option value="Cat">Cat</option>
              <option value="Dog">Dog</option>
              <option value="Rabit">Rabit</option>
              <option value="Sugar glider">Sugar glider</option>
            </select>

            <Link to="/">
              <button type="button" className="prBtnlogout">
                Logout
              </button>
            </Link>
          </div>
        </div>
        <Link to="/payment">
          <Payment />
        </Link>
        <div className="prSidebar-right">
          <Payment />
          <div className="prmodal">
            <Card style={{ width: "350px" }} className="prCard">
              <Card.Img  src={require("../img/bgCat.jpg") } />
              <Card.Body>
                <Card.Title>
                  <div className="prname">Garry</div>
                </Card.Title>
                <Card.Text>
                  <img
                    src={require("../img/icon/user.png")}
                    className="pricon"
                  ></img>
                  Breeder : Harttonz Zurkerbeg
                </Card.Text>
                <Card.Text>
                  <img
                    src={require("../img/icon/loc.png")}
                    className="pricon"
                  ></img>
                  1 Kilometer dari sini
                </Card.Text>
                <Card.Text>
                  <img
                    src={require("../img/icon/gender.png")}
                    className="pricon"
                  ></img>
                  Male : Adult
                </Card.Text>
                <Card.Text>
                  <img
                    src={require("../img/icon/phone.png")}
                    className="pricon"
                  ></img>
                  Phone : 089533201884
                </Card.Text>
                <Link to="/editprofil">
                  <button type="button" className="prBtnEdit">
                    Edit
                  </button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    );
}
}

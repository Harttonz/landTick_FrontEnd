import React, { Component } from "react";
import "./userIndex.css";
import Footer from "./footer";
import Header from "./header";
import ModalLogin from './modalLogin';
import Register from "./Register";
export default class User extends Component {
  render() {
    return (
      <div className="mainindex">
        <div className="navigationIndex">
          <img
            src={require("../../img/trainlogo.png")}
            className="trainlogofirstindex"
          ></img>
          <Register />
          <ModalLogin />
        </div>
        <Header />
        <Footer />
        <div className="boxfloatindex">
          <div className="bfleftindex">
            <div className="bfupperindex">
              <img
                src={require("../../img/train.png")}
                className="trainlogoindex"
              ></img>
              <p className="traintextindex">The Train's ticket</p>
            </div>
          </div>
          <div className="trainindex">The Train</div>
          <div className="fromindex">From</div>
          <br></br>
          <input type="text" className="textfromindex" placeholder="Jakarta"></input>
          <br></br>
          <div className="fromindex">Departure Date</div>
          <br></br>
          <input
            type="text"
            className="textdepartureindex"
            placeholder="DD-MM-YYYY"
          ></input>
          <input type="checkbox" className="checkppindex"></input> Round Trip
          <img
            src={require("../../img/rounded.png")}
            className="exchangelogoindex"
          ></img>
        </div>
        <div className="fromdestinationindex">Destination</div>
        <br></br>
        <input type="text" className="textdesindex" placeholder="Surabaya"></input>
        <div className="adultindex">Adult</div>
        <br></br>
        <select className="ageselect1index">
          <option>1</option>
          <option>2</option>
        </select>
        <div className="babyindex">Baby</div>
        <br></br>
        <select className="ageselect2index">
          <option>1</option>
          <option>2</option>
        </select>
        <button type="button" className="searchindex">
          Search Ticket
        </button>
        <div className="passegerindex">
          <div className="trainNameindex">The Train's Name</div>
          <div className="departindex">Departure</div>
          <div className="arriveindex">Arrival</div>
          <div className="durationindex">Duration</div>
          <div className="priceindex">Price /person </div>
        </div>
        <div className="show1index">
          <div className="v11index">Argo Wilis</div>
          <div className="v12index">05.00</div>
          <div className="v13index">10.00</div>
          <div className="v14index">5h 5m</div>
          <div className="v15index">Rp 250.000</div>
        </div>
        <div className="show2index">
          <div className="v1index">Wilis Argo</div>
          <div className="v2index">10.00</div>
          <div className="v3index">05.00</div>
          <div className="v4index">5h 5m</div>
          <div className="v5index">Rp 100.000</div>
        </div>
        <div className="show3index">
          <div className="v1index">Anjasmoro</div>
          <div className="v2index">10.00</div>
          <div className="v3index">05.00</div>
          <div className="v4index">5h 5m</div>
          <div className="v5index">Rp 100.000</div>
        </div>
      </div>
    );
  }
}

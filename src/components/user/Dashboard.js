import React, { Component } from "react";
import "./Dashboard.css";
import Footer from "./footer";
import Header from "./header";
import {Link} from "react-router-dom";


export default class Dashboard extends Component {
  render() {
    return (
      <div className="bckgrdmainmenuDashboard">
        <div className="navDashboard">
          <img
            src={require("../../img/trainlogo.png")}
            className="trainlogofirstDSH"
            alt="trainlogofirstDSH"
          ></img>
          <div className="dropdownDSH">
            <div className="userDSH">Harttonz</div>
            <img
              src={require("../../img/account.png")}
              className="dropbtnDSH"
              alt="dropbtnDSH"
            ></img>
            <div class="dropdown-contentDSH">
              <div className="link1DSH">
                <Link to="/myticket">
                  <img
                    src={require("../../img/ticket11.png")}
                    className="ticketbuttonDSH"
                    alt="ticketbuttonDSH"
                  ></img>
                </Link>
                <div>My Ticket</div>
              </div>
              <div className="link1DSH">
                <Link to="/payment">
                  <img
                    src={require("../../img/payment11.png")}
                    className="paymentbuttonDSH"
                    alt="paymentbuttonDSH"
                  ></img>
                </Link>
                <div>Payment</div>
              </div>
              <div className="link1DSH">
                <Link to="/">
                  <img
                    src={require("../../img/logout.png")}
                    alt="logoutbuttonDSH"
                    className="logoutbuttonDSH"
                  ></img>
                </Link>
                <div className="logouttextDSH">Logout</div>
              </div>
            </div>
          </div>
        </div>
        <Header />
        <Footer />
        <div className="boxfloatDSH">
          <div className="bfleftDSH">
            <div className="bfupperDSH">
              <img
                src={require("../../img/train.png")}
                className="trainlogoDSH"
              ></img>
              <p className="traintextDSH">The train's ticket</p>
            </div>
          </div>
          <div className="trainsDSH">The train</div>
          <div className="fromDSH">From</div>
          <br></br>
          <input
            type="text"
            className="textfromDSH"
            placeholder="Jakarta"
          ></input>
          <br></br>
          <div className="fromDSH">Departure Date</div>
          <br></br>
          <input
            type="text"
            className="textdepartureDSH"
            placeholder="DD-MM-YYYY"
          ></input>
          <input type="checkbox" className="checkppDSH"></input> Round Trip
          <img
            src={require("../../img/rounded.png")}
            className="exchangelogoDSH"
          ></img>
        </div>
        <div className="fromdestinationDSH">Destination</div>
        <br></br>
        <input
          type="text"
          className="textdesDSH"
          placeholder="Surabaya"
        ></input>
        <div className="adultDSH">Adult</div>
        <br></br>
        <select className="ageselect1DSH">
          <option>1</option>
          <option>2</option>
        </select>
        <div className="babyDSH">Baby</div>
        <br></br>
        <select className="ageselect2DSH">
          <option>1</option>
          <option>2</option>
        </select>
        <button type="button" className="searchDSH">
          Search Ticket
        </button>
        <div className="ListPsgDSH">
          <div className="trainNameDSH">The train's Name</div>
          <div className="departDSH">Departure</div>
          <div className="arriveDSH">Arrival</div>
          <div className="durationDSH">Duration</div>
          <div className="priceDSH">Price /person </div>
        </div>
        <div className="show1DSH">
          <div className="v1DSH">Argo wilis</div>
          <div className="v2DSH">05.00</div>
          <div className="v3DSH">10.00</div>
          <div className="v4DSH">5h 5m</div>
          <div className="v5DSH">Rp 250.000</div>
        </div>
        <div className="show2DSH">
          <div className="v1DSH">Wilis Argo</div>
          <div className="v2DSH">10.00</div>
          <div className="v3DSH">05.00</div>
          <div className="v4DSH">5h 5m</div>
          <div className="v5DSH">Rp 100.000</div>
        </div>
        <div className="show3DSH">
          <div className="v1DSH">Anjasmoro</div>
          <div className="v2DSH">10.00</div>
          <div className="v3DSH">05.00</div>
          <div className="v4DSH">5h 5m</div>
          <div className="v5DSH">Rp 100.000</div>
        </div>
      </div>
    );
  }
}

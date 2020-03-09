import React, { Component } from "react";
import "./myTicket.css";
import Footer from "./footer";
import Header from "./header";
import ModalLogin from "./modalLogin";
import Register from "./Register";
import {Link} from "react-router-dom";

export default class Myticket extends Component {
  render() {
    return (
      <div className="bMyticket">
        <div className="navmyticket">
          <img
            src={require("../../img/trainlogo.png")}
            className="trainlogofirstMT"
          ></img>
          <div class="dropdownMT">
            <div className="userMT">Harttonz</div>
            <img
              src={require("../../img/account.png")}
              className="dropbtnMT"
              alt="dropbtnMT"
            ></img>
            <div class="dropdown-contentMT">
              <div className="link1MT">
                <Link to="/myticket">
                  <img
                    src={require("../../img/ticket11.png")}
                    className="ticketbuttonMT"
                    alt="ticketbuttonMT"
                  ></img>
                </Link>
                <div>My Ticket</div>
              </div>
              <div className="link1MT">
                <Link to="/payment">
                  <img
                    src={require("../../img/payment11.png")}
                    className="paymentbuttonMT"
                    alt="paymentbuttonMT"
                  ></img>
                </Link>
                <div>Payment</div>
              </div>
              <div className="link1MT">
                <Link to="user">
                  <img
                    src={require("../../img/logout.png")}
                    alt="logoutbuttonMT"
                    className="logoutbuttonMT"
                  ></img>
                </Link>
                <div className="logouttextMT">Logout</div>
              </div>
            </div>
          </div>
        </div>
        <div className="myticketMT">My Ticket</div>
        <div className="mytktMT">
          <img
            src={require("../../img/bannerMyticket.png")}
            className="myticketlogoMT"
          ></img>
          <div className="argoMT">Argo Wilis</div>
          <div className="typeArgoMT">Eksekutif (H)</div>
          <div className="pendingMT">pending..</div>
          <div className="pcicMT">Citizen indentification card</div>
          <div className="pOrdersMT">No.Orders</div>
          <div className="pHpMT">No.Handphone</div>
          <div className="pemailMT">E Mail</div>
          <div className="hrlineMT"></div>
          <div className="noCicMT">080983938938766</div>
          <div className="noOrdersMT">E0998789977</div>
          <div className="noHpMT">0895332019988</div>
          <div className="noEmailMT">Harttonzzurkerbeg@gmail.com</div>
          <div className="depTimeMT">05.00</div>
          <div className="datetimedetMT">21 Februari 2020</div>
          <div className="depPlaceMT">Jakarta (GMR) </div>
          <div className="notdepPlaceMT">Gambir St.</div>
          <div className="destPlaceMT">Surabaya (SRY) </div>
          <div className="notdestPlaceMT">surabaya St.</div>
          <div className="TicketMT">The Train </div>
          <div className="datetimenowMT">Sunday,24 Februari 2020</div>
          <img
            src={require("../../img/linethrough.png")}
            className="linethroughMT"
          ></img>
          <div className="arrvTimeMT">05.00</div>
          <div className="datetimearrvMT">21 Februari 2020</div>
          <Link to="payment">
            <button type="button" className="payNowMT">
              Pay Now
            </button>
          </Link>
        </div>
        <Link to="detailticket">
          <button type="button" className="detailticketMT">
            Ticket Detail
          </button>
        </Link>
      </div>
    );
  }
}

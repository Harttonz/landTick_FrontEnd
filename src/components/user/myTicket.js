import React, { Component } from "react";
import "./myTicket.css";
import Footer from "./footer";
import Header from "./header";
import ModalLogin from "./modalLogin";
import Register from "./Register";
import {Link} from "react-router-dom";
import NavHeader from "../navHeader/navHeader";

export default class Myticket extends Component {
  render() {
    return (
      <div className="bMyticket">
        <NavHeader />
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

import React, { Component } from "react";
import "./myticket_approved.css";
import Footer from "./footer";
import Header from "./header";
import ModalLogin from "./modalLogin";
import Register from "./Register";
import {Link} from "react-router-dom"
import NavHeader from "../navHeader/navHeader";
export default class MyticketApproved extends Component {
  render() {
    return (
      <div className="bckgrApproved">
        <NavHeader />
        <div className="myticketApproved">My Ticket</div>
        <div className="mytktApproved">
          <img
            src={require("../../img/bannerMyticket.png")}
            className="myticketlogoApproved"
          ></img>
          <div className="argoApproved">Argo Wilis</div>
          <div className="typeArgoApproved">Eksekutif (H)</div>
          <div className="approved">Approved..</div>
          <div className="pcicApproved">Citizen indentification card</div>
          <div className="pOrdersApproved">No.Orders</div>
          <div className="pHpApproved">No.Handphone</div>
          <div className="pemailApproved">E Mail</div>
          <div className="hrlineApproved"></div>
          <div className="noCicApproved">080983938938766</div>
          <div className="noOrdersApproved">E0998789977</div>
          <div className="noHpApproved">0895332019988</div>
          <div className="noEmailApproved">Harttonzzurkerbeg@gmail.com</div>
          <div className="depTimeApproved">05.00</div>
          <div className="datetimedetApproved">21 Februari 2020</div>
          <div className="depPlaceApproved">Jakarta (GMR) </div>
          <div className="notdepPlaceApproved">Gambir St.</div>
          <div className="destPlaceApproved">Surabaya (SRY) </div>
          <div className="notdestPlaceApproved">surabaya St.</div>
          <div className="TicketApproved">The Train </div>
          <div className="datetimenowApproved">Sunday,24 Februari 2020</div>
          <img
            src={require("../../img/linethrough.png")}
            className="linethroughApproved"
          ></img>
          <div className="arrvTimeApproved">05.00</div>
          <div className="datetimearrvApproved">21 Februari 2020</div>
        </div>
      </div>
    );
  }
}

import React,{Component} from "react";
import "./payment.css";
import Pending from "./pendingFrame";
import NavHeader from "../navHeader/navHeader";
export default class Payment extends Component{
  render(){
      return (
        <div>
          <div className="bckgrdmainmenuPayment">
            <NavHeader/>
            <div className="myticketpayment">Invoice</div>
            <div className="notespy1">
              <div className="infopayment">
                You can pay by M-banking,E-banking,ATM with account number bank
                below
              </div>
              <div className="nopayment">N0 : 0898498478877</div>
              <img
                src={require("../../img/danger1.png")}
                className="dangerpayment"
              ></img>
            </div>
            <div className="notespy2">
              <img
                src={require("../../img/bannerMyticket.png")}
                className="myticketlogopayment"
              ></img>
              <div className="pcicpy">Citizen indentification card</div>
              <div className="pOrderspy">No.Orders</div>
              <div className="pHppy">No.Handphone</div>
              <div className="pemail">E Mail</div>
              <div className="hrlinepy"></div>
              <div className="noCicpy">080983938938766</div>
              <div className="noOrderspy">E0998789977</div>
              <div className="noHppy">0895332019988</div>
              <div className="noEmailpy">Harttonz@gmail.com</div>
            </div>
            <div className="detailsPrice">Price Details</div>
            <div className="notespy3">
              <div className="notes3pyargo">Argo Wilis ( Adult) 1X</div>
              <div className="notes3pyRp">Rp 250.000</div>
              <div className="notes3pyboxgrey">
                <div className="notes3pytotal">total</div>
                <div className="notes3pytotalrp">Rp 250.000</div>
              </div>
              <div className="pendingComponent">
                <Pending />
              </div>
            </div>
            <div className="notespaynow">Uploaded as proof of payment</div>
            <div className="boxImageuploaded">
              <img
                src={require("../../img/Transfer.png")}
                className="proofPy"
                alt="proofPy"
              ></img>
            </div>
            <div className="piecesofpayments">
              <div className="upperpiecesofpayments">
                <div className="TheTrain">The Train </div>
                <div className="datetimenowpayment">
                  <span className="day">Sunday</span>,24 Februari 2020
                </div>
                <div className="payScannerBox">
                  <img
                    src={require("../../img/barcode.png")}
                    className="scannerPict"
                  ></img>
                </div>
              </div>
              <div className="argopayment">Argo Wilis</div>
              <div className="typeArgopayment">Eksekutif (H)</div>
              <img
                src={require("../../img/linethrough.png")}
                className="linethroughpayment"
              ></img>
              <div className="depTimepayment">05.00</div>
              <div className="depdatetimepayment">21 Februari 2020</div>
              <div className="arrvTimepayment">10.05</div>
              <div className="arrvdatetimepayment">21 Februari 2020</div>
              <div className="depPlacepayment">Jakarta (GMR) </div>
              <div className="notdepPlacepayment">Gambir St.</div>
              <div className="destPlacepayment">Surabaya (SRY) </div>
              <div className="notdestPlacepayment">surabaya St.</div>
            </div>
          </div>
        </div>
      );
  }
}
           
              
         
           
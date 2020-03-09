import React,{Component} from "react";
import "./detailTicket.css";
import {Link} from "react-router-dom";
export default class Detailticket extends Component{
   render(){
   return (
     <>
       <div className="DetailTicket">
         <img
           src={require("../../img/leftLogo.png")}
           className="leftLogoDT"
         ></img>
         <div className="eTicketDT">E-Ticket</div>
         <div className="invoiceCodeDT">Invoice Code : INV0101</div>
         <div className="trainDetailDT">The Train </div>
         <div className="datetimenowDetailDT">
           <span className="daydetailDT">Sunday</span>24 Februari 2020
         </div>
         <div className="argodetailDT">Argo Wilis</div>
         <div className="typeArgodetailDT">Eksekutif (H)</div>
         <img
           src={require("../../img/linethrough.png")}
           className="linethroughDetailDT"
         ></img>
         <div className="depTimedetailDT">05.00</div>
         <div className="depdatetimedetailDT">21 Februari 2020</div>
         <div className="arrvTimedetailDT">10.05</div>
         <div className="arrvdatetimedetailDT">21 Februari 2020</div>
         <div className="depPlacedetailDT">Jakarta (GMR) </div>
         <div className="notdepPlacedetailDT">Gambir St.</div>
         <div className="destPlacedetailDT">Surabaya (SRY) </div>
         <div className="notdestdetailDT">surabaya St.</div>
         <div className="BoxdetailScanerDT">
           <img
             src={require("../../img/barcode2.png")}
             className="detailScannerDT"
           ></img>
         </div>
         <div className="lineDetailfirstDT"></div>
         <div className="BoxLineDetailDT">
           <img
             src={require("../../img/notify.png")}
             className="notifyDT"
           ></img>
           <div className="notifyparafDT">
             Show your E-ticket and Netizen Indentification Card when Passenger
             when checking in
           </div>
           <img src={require("../../img/timer.png")} className="timerDT"></img>
           <div className="timerparafDT">
             Make sure that you must be checked at 90 minutes early before
             departure
           </div>
           <img
             src={require("../../img/declar.png")}
             className="declarDT"
           ></img>
           <div className="declarparafDT">
             the time that availale based on time zone local
           </div>
         </div>
         <div className="lineDetailsecondDT"></div>
         <div className="pcicDetailDT">Citizen indentification card</div>
         <div className="pOrdersDetailDT">No.Orders</div>
         <div className="pHpDetailDT">No.Handphone</div>
         <div className="pemailDetailDT">E Mail</div>
         <div className="noCicDetailDT">080983938938766</div>
         <div className="noOrdersDetailDT">E0998789977</div>
         <div className="noHpDetailDT">0895332019988</div>
         <div className="noEmailDetailDT">Harttonzzurkerbeg@gmail.com</div>
         <Link to="/dashboard">
           <button className="backtoMenu">Back To Home</button>
         </Link>
       </div>
     </>
   );
   }
}

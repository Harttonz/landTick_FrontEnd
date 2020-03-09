import React,{Component} from "react";
import "./detailTicketAdmin.css";
import {Modal} from "react-bootstrap";

export default class DetailticketAdmin extends Component{
    constructor(props){
        super(props);
        this.state = {
            show:false
        };
    }
    handleModal = visible => {
        this.setState({show:!visible});
    }
   render(){
       const {show} = this.state;
   return (
     <>
       <img
         src={require("../../img/search111.png")}
         className="searchbuttonIndex"
         onClick={() => this.handleModal(show)}
       ></img>
       <Modal size="lg" show={show} onHide={() => this.handleModal(show)}>
         <img
           src={require("../../img/rightlogo.png")}
           className="rightLogoDTA"
         ></img>
         <div className="eTicketDTA">E-Ticket</div>
         <div className="invoiceCodeDTA">Invoice Code : INV0101</div>
         <div className="trainDetailDTA">The Train </div>
         <div className="datetimenowDetailDTA">
           <span className="daydetailDTA">Sunday</span>,24 Februari 2020
         </div>
         <div className="argodetailDTA">Argo Wilis</div>
         <div className="typeArgodetailDTA">Eksekutif (H)</div>
         <img
           src={require("../../img/linethrough.png")}
           className="linethroughDetailDTA"
         ></img>
         <div className="depTimedetailDTA">05.00</div>
         <div className="depdatetimedetailDTA">21 Februari 2020</div>
         <div className="arrvTimedetailDTA">10.05</div>
         <div className="arrvdatetimedetailDTA">21 Februari 2020</div>
         <div className="depPlacedetailDTA">Jakarta (GMR) </div>
         <div className="notdepPlacedetailDTA">Gambir St.</div>
         <div className="destPlacedetailDTA">Surabaya (SRY) </div>
         <div className="notdestdetailDTA">surabaya St.</div>
         <div className="BoxdetailScanerDTA">
           <img
             src={require("../../img/barcode2.png")}
             className="detailScannerDTA"
           ></img>
         </div>
         <div className="lineDetailfirstDTA"></div>
         <div className="pcicDetailDTA">Citizen indentification</div>
         <div className="pOrdersDetailDTA">No.Orders</div>
         <div className="pHpDetailDTA">No.Handphone</div>
         <div className="pemailDetailDTA">E Mail</div>
         <div className="noCicDetailDTA">080983938938766</div>
         <div className="noOrdersDetailDTA">E0998789977</div>
         <div className="noHpDetailDTA">0895332019988</div>
         <div className="noEmailDetailDTA">Harttonzzurkerbeg@gmail.com</div>
         <div className="lineDetailsecondDTA"></div>
         <div className="BoxFooterDTA">
           <div className="totalDTA">Total</div>
           <div className="RpDTA">Rp. 250.000</div>
         </div>
         <div className="notespaynowDTA">Uploaded as proof of payment</div>
         <div className="boxImageuploadedDTA">
           <img src={require("../../img/Transfer.png")}
                className="transferDTA"
             ></img>
         </div>
       </Modal>
     </>
   );
   }
}

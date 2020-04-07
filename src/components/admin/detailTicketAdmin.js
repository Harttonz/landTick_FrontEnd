import React,{Component} from "react";
import "./detailTicketAdmin.css";
import {Modal} from "react-bootstrap";
import { getDayName, GetIDR } from "../functional/utilities";
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
       console.log("data update",this.props.data);
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
         <div className="invoiceCodeDTA">
           Invoice Code : INV000{this.props.data.id}
         </div>
         <div className="trainDetailDTA">The Train </div>
         <div className="datetimenowDetailDTA">
           <span className="daydetailDTA">{getDayName(this.props.data.ticket.start_date)}</span>
         </div>
         <div className="argodetailDTA">{this.props.data.ticket.name}</div>
         <div className="typeArgodetailDTA">
           {this.props.data.train.name} (H)
         </div>
         <img
           src={require("../../img/linethrough.png")}
           className="linethroughDetailDTA"
         ></img>
         <div className="depTimedetailDTA">
           {this.props.data.ticket.start_time}
         </div>
         <div className="depdatetimedetailDTA">
           {this.props.data.ticket.start_date}
         </div>
         <div className="arrvTimedetailDTA">
           {this.props.data.ticket.arrival_time}
         </div>
         <div className="arrvdatetimedetailDTA">
           {this.props.data.ticket.start_date}
         </div>
         <div className="depPlacedetailDTA">
           {this.props.data.ticket.start_station}
         </div>
         <div className="notdepPlacedetailDTA">
           {this.props.data.ticket.start_station} St.
         </div>
         <div className="destPlacedetailDTA">
           {this.props.data.ticket.destination}
         </div>
         <div className="notdestdetailDTA">
           {this.props.data.ticket.destination} St.
         </div>
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
         <div className="noOrdersDetailDTA">OR-{this.props.data.id}</div>
         <div className="noHpDetailDTA">{this.props.data.user.phone}</div>
         <div className="noEmailDetailDTA">{this.props.data.user.email}</div>
         <div className="lineDetailsecondDTA"></div>
         <div className="BoxFooterDTA">
           <div className="totalDTA">Total</div>
           <div className="RpDTA">{GetIDR(this.props.data.total_price)}</div>
         </div>
         <div className="notespaynowDTA">Uploaded as proof of payment</div>
         <div className="boxImageuploadedDTA">
           <img
             src={require("../../img/Transfer.png")}
             className="transferDTA"
           ></img>
         </div>
       </Modal>
     </>
   );
   }
}

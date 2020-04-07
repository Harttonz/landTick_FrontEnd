import React, { Component,Fragment } from "react";
import "./BuyTicketForm.css";
import{Redirect} from "react-router-dom";
import { Modal } from "react-bootstrap";
import { getDayName, GetIDR } from "../functional/utilities";
export default class Buy extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  handleModal = () => {
    this.setState({ show: !this.state.show });
  };
    render() {
      const { show } = this.state;
      console.log("data update", this.props.data);
      return (
        <Fragment>
          <button type="button" className="Buy"onClick={() => this.handleModal(show)}>Buy Now</button>
          <Modal size="lg" show={show} onHide={() => this.handleModal(show)}>
            <img src={require("../../img/rightlogo.png")}className="rightLogoBTF"/>
            <div className="eTicketBTF">E-Ticket</div>
            <div className="trainDetailBTF">The Train </div>
            <div className="datetimenowDetailBTF">{getDayName(this.props.data.start_date)}</div>
            <div className="argodetailBTF">{this.props.data.name}</div>
            <div className="typeArgodetailBTF">{this.props.data.train.name}</div>
            <img src={require("../../img/linethrough.png")} className="linethroughDetailBTF"/>
            <div className="depTimedetailBTF">{this.props.data.start_time}</div>
            <div className="depdatetimedetailBTF">{getDayName(this.props.data.start_date)}</div>
            <div className="arrvTimedetailBTF">{this.props.data.arrival_time}</div>
            <div className="arrvdatetimedetailBTF">{getDayName(this.props.data.start_date)}</div>
            <div className="depPlacedetailBTF">{this.props.data.start_station}</div>
            <div className="notdepPlacedetailBTF">{this.props.data.start_station} St.</div>
            <div className="destPlacedetailBTF">{this.props.data.destination}</div>
            <div className="notdestdetailBTF">{this.props.data.destination} St.</div>
            <div className="lineDetailfirstBTF"></div>
            <div className="userData">
               <div className="pcicDetailBTF">Citizen indentification</div>
               <div className="pOrdersDetailBTF">No.Orders</div>
               <div className="pHpDetailBTF">No.Handphone</div>
               <div className="pemailDetailBTF">E Mail</div>
            </div>
            <div className="userDataContent">
            <div className="noCicDetailBTF">080983938938766</div>
            <div className="noOrdersDetailBTF">OR-</div>
            <div className="noHpDetailBTF"></div>
            <div className="noEmailDetailBTF"></div>
            <div className="lineDetailsecondBTF"></div>
            </div>
            <div className="BoxFooterBTF">
              <div className="totalBTF">Total</div>
              <div className="RpBTF"></div>
            </div> 
              
        
          </Modal>
        </Fragment>
      );
            
    }
}
        

import React, { Component,Fragment } from "react";
import {Row,Col} from "react-bootstrap";
import "./userIndex.css";
import NavSearch from "../user/NavSearch";
import Footer from "./footer";
import Header from "./header";
import {Redirect} from "react-router-dom";
import ModalLogin from './modalLogin';
import { connect } from "react-redux";
import {GetIDR,intervalTime,timeRange} from "../functional/utilities";
import { getTicketsToday } from "../../_actions/ticketA";
import Register from "./Register";
 class User extends Component {
   constructor() {
     super();
     this.state = {
       startStation: "",
       date: "",
       dateTo: "",
       destinationStation: "",
       formErr: false
     };
   }
   

  //  sendQtyToHome = () => {
  //    let qty = this.state.qtyAdult + this.state.qtyBaby;
  //    this.props.handleTotalQty(qty);
  //  };

  //  handleChangeQtyAdultMin = () => {
  //    if (this.state.qtyAdult > 0) {
  //      this.setState(
  //        {
  //          qtyAdult: this.state.qtyAdult - 1
  //        },
  //        () => this.sendQtyToHome()
  //      );
  //    }
  //  };

  //  handleChangeQtyAdultAdd = () => {
  //    this.setState(
  //      {
  //        qtyAdult: this.state.qtyAdult + 1
  //      },
  //      () => this.sendQtyToHome()
  //    );
  //  };
  //  handleChangeQtyBabyMin = () => {
  //    if (this.state.qtyBaby > 0) {
  //      this.setState(
  //        {
  //          qtyBaby: this.state.qtyBaby - 1
  //        },
  //        () => this.sendQtyToHome()
  //      );
  //    }
  //  };

  //  handleChangeQtyBabyAdd = () => {
  //    this.setState(
  //      {
  //        qtyBaby: this.state.qtyBaby + 1
  //      },
  //      () => this.sendQtyToHome()
  //    );
  //  };
   componentDidMount() {
         const date = new Date();
         const dateNow = `${date.getFullYear()}-${("0" +(date.getMonth() + 1)).slice(-2)}-${("0" + date.getDate()).slice(-2)}`;
         this.props.getTicketsToday(dateNow);
   }
   render() {
    const { ticketToday} = this.props.tickets;
    console.log('content of ticket data today',ticketToday)
    console.log('content of Qty',this.props.qty)

     return (
       <div className="mainindex">
         <div className="navigationIndex">
           <img src={require("../../img/trainlogo.png")}className="trainlogofirstindex"/>
           <Register />
           <ModalLogin />
         </div>
         <Header />
         <NavSearch handleTotalQty={this.handleTotalQty}/>
      <div>
         <Fragment>
            <div className="ListTicketTitle">
                <div className="ListTicketContentTitle">The train's Name</div>
                <div className="ListTicketContentTitle">Departure</div>
                <div className="ListTicketContentTitle">Arrival</div>
                <div className="ListTicketContentTitle">Duration</div>
                <div className="ListTicketContentTitle">Price /person </div>
            </div>
        </Fragment>
           {ticketToday.length > 0 ?(
              <Fragment>
                {ticketToday.map((value,index)=>(
                <div className="ListTicket" key={index}>
                   <div className="ListTicketContent">{value.name}</div>
                   <div className="ListTicketContent">{value.start_time}
                      <br></br>
                      <span className="ContentStartStation">{value.start_station}</span>
                   </div>
                   <div className="ListTicketContent">{value.arrival_time}
                      <br></br>
                      <span className="ContentStartStation">{value.destination}</span>
                   </div>
                    <div className="ListTicketContent">{intervalTime(value.arrival_time,value.start_time)}</div>
                   <div className="ListTicketContent">{GetIDR(value.price)} </div>
               </div>
                  ))}
              </Fragment>
           ):
           (
             <h5>
              <center>Ticket is Unavailable Today </center>
             </h5>
           )}
         </div>
         {/* <Footer/> */}
       </div>
     );
   }
 }

const mapStateToProps = state => {
  return {
    tickets: state.ticketR
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTicketsToday: dateNow => dispatch(getTicketsToday(dateNow))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(User);

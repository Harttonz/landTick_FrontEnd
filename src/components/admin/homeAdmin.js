import React, { Component,Fragment} from "react";
import {Row,Col} from "react-bootstrap";
import "./homeAdmin.css";
import Footer from "../user/footer";
import NavHeaderAdmin from "../navHeader/navHeaderAdmin";
import { getTicketsToday } from "../../_actions/ticketA";
import {GetIDR,intervalTime,timeRange} from "../functional/utilities";
import Header from "../user/header";
import ProductNav from "../user/ProductNav";
import {Redirect} from "react-router-dom";
import NavSearch from "../user/NavSearch";
import { connect } from "react-redux";
// import { allTicket } from "../../_actions/traindataA";
 class HomeAdmin extends Component {
   componentDidMount() {
    const date = new Date();
    const dateNow = `${date.getFullYear()}-${("0" +(date.getMonth() + 1)).slice(-2)}-${("0" + date.getDate()).slice(-2)}`;
    this.props.getTicketsToday(dateNow); 
   }
   render() {
      const { ticketToday} = this.props.tickets;
      return (
      <div className="mainindex">
          <NavHeaderAdmin />
          <Header />
          <NavSearch/>
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
           {ticketToday.length > 0 ? (
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
                   <div className="ListTicketContent">{GetIDR(value.price)}</div>
                </div>))}
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


export default connect(mapStateToProps, mapDispatchToProps)(HomeAdmin);
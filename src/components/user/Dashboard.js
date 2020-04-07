import React, { Component,Fragment } from "react";
import NavHeader from "../navHeader/navHeader";
import {GetIDR,intervalTime,timeRange} from "../functional/utilities";
import "./Dashboard.css";
import Footer from "./footer";
import Header from "./header";
import NavSearch from "./NavSearch";
import { getTicketsToday } from "../../_actions/ticketA";
import { connect } from "react-redux";
import { BaseUrl, headerAuthorization } from "../../config/headerToken";
import axios from "axios";
import Buy from "../user/BuyTicketForm";
 class Dashboard extends Component {
        componentDidMount() {
          const date = new Date();
          const dateNow = `${date.getFullYear()}-${("0" +(date.getMonth() + 1)).slice(-2)}-${("0" + date.getDate()).slice(-2)}`;
          this.props.getTicketsToday(dateNow);
        }
  //  Buy = async () => {
  //    try {
  //      await axios({
  //        method: "GET",
  //        url: `${BaseUrl}/orders/${this.props.data.id}`,
  //        headers: headerAuthorization
  //      });
  //      window.location.href = "http://localhost:3000/admin";
  //    } catch (err) {
  //      console.log(err.message);
  //    }
  //  };
   render() {
    const { ticketToday} = this.props.tickets;
     return (
       <div className="bckgrdmainmenuDashboard">
         <NavHeader />
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
                <div className="ListTicketContentTitle">Action</div>
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
                   <div className="BuyTicket"><Buy data={value}/></div>
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

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);
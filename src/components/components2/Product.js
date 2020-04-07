import React,{Fragment}from "react";
 const Product = (props) => {
     return (
       <Fragment>
           <div className="ListTicket">
           <div className="ListTicketContent">The train's Name</div>
           <div className="ListTicketContent">Departure</div>
           <div className="ListTicketContent">Arrival</div>
           <div className="ListTicketContent">Duration</div>
           <div className="ListTicketContent">Price /person </div>
           <div className="ListTicketContent">Action</div>
         </div>
       </Fragment>
     )
 }
export default Product
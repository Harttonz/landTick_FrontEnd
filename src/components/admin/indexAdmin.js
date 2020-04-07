import React, { Component } from "react";
import "./indexAdmin.css";
import {Table} from "react-bootstrap";
import { Redirect } from "react-router-dom";
import DetailticketAdmin from "./detailTicketAdmin"
import Editstatus from "./editStatus";
import Delete from "./delete";
import { connect } from "react-redux";
import NavHeaderAdmin from "../navHeader/navHeaderAdmin";
import { DataAdmin } from "../../_actions/OrderA";
class Admin extends Component {
  close = () =>{
    localStorage.removeItem("token");
  }
  componentDidMount(){
    this.props.DataAdmin();
  }
                 render() {
                    const {orders,isloading } = this.props.orderR;
                    console.log("----",orders);
                    if(isloading === true){
                      return <div>Data is loading</div>
                    }
                   return (
                     <div className="adminPageIndex">
                       <NavHeaderAdmin />
                       <div className="tlIndex">Transaction List</div>
                       <Table
                         striped
                         bordered
                         hover
                         size="sm"
                         className="tableAdminIndex"
                       >
                         <thead>
                           <tr>
                             <th>No</th>
                             <th>Users</th>
                             <th>Tiket</th>
                             <th>Proop Of Payment</th>
                             <th>Status Payment</th>
                             <th>Actions</th>
                           </tr>
                         </thead>
                         <tbody>
                           {orders
                             ? orders.map((value, index) => (
                                 <tr>
                                   <td>{index + 1}</td>
                                   <td>{value.user.username}</td>
                                   <td>
                                     {`${value.ticket.start_station} - 
                                     ${value.ticket.destination}`}
                                   </td>
                                   <td>{value.attachment}</td>
                                   <td>
                                     <div className="col-md-2 text-center">
                                       {value.status === "Approved" ? (
                                         <p className="StatusApproved">
                                           Approved
                                         </p>
                                       ) : (
                                         ""
                                       )}
                                       {value.status === "Cancel" ? (
                                         <p className="StatusCancel">Cancel</p>
                                       ) : (
                                         ""
                                       )}
                                       {value.status === "Pending" ? (
                                         <p className="StatusPending">
                                           Pending
                                         </p>
                                       ) : (
                                         ""
                                       )}
                                     </div>
                                   </td>
                                   <td>
                                     <DetailticketAdmin data={value} /> |
                                     <Editstatus data={value} />|
                                     <Delete data={value}/>
                                   </td>
                                 </tr>
                               ))
                             : ""}
                         </tbody>
                       </Table>
                       <div className=""></div>
                     </div>
                   );
                 }
               }
const mapStateToProps = state => {
 
  return {
    orderR: state.orderR
  };
};

const mapDispatchToProps = dispatch => {
  return {
    DataAdmin: () => dispatch(DataAdmin())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
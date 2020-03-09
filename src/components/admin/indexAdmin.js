import React, { Component } from "react";
import "./indexAdmin.css";
import {Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import DetailticketAdmin from "./detailTicketAdmin"
import Editstatus from "./editStatus";
export default class Admin extends Component {
    render(){
        return (
          <div className="adminPageIndex">
            <div className="navAdminIndex">
              <img
                src={require("../../img/trainlogo.png")}
                className="trainlogofirstAdminIndex"
                alt="trainlogofirstAdminIndex"
              ></img>
              <div class="dropdownIndex">
                <img
                  src={require("../../img/admin.png")}
                  className="dropbtnIndex"
                  alt="dropbtnIndex"
                ></img>
                <div class="dropdown-contentIndex">
                  <div className="link1Index">
                    <Link to="/addticket">
                      <img
                        src={require("../../img/ticket11.png")}
                        className="ticketbuttonIndex"
                        alt="ticketbutton"
                      ></img>
                    </Link>
                    <div> Add Ticket</div>
                  </div>
                  <div className="link1Index">
                    <img
                      src={require("../../img/logout.png")}
                      alt="logoutbutton"
                      className="logoutbuttonIndex"
                    ></img>
                    <Link to="user">
                      <div className="logouttextIndex">Logout</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="tlIndex">Transaction List</div>
            <Table striped bordered hover size="sm" className="tableAdminIndex">
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
                <tr>
                  <td>1</td>
                  <td>Harttonz</td>
                  <td>Pekalongan - Jakarta</td>
                  <td>bca.jpg</td>
                  <td className="ApprovedIndex">Approved</td>
                  <td>
                    <DetailticketAdmin /> |
                    <Editstatus />|
                    <img
                      src={require("../../img/trash111.png")}
                      alt="deletebuttonIndex"
                      className="deletebuttonIndex"
                    ></img>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Bazyy</td>
                  <td>Bandung - Jakarta</td>
                  <td>bni.jpg</td>
                  <td className="PendingIndex">Pending</td>
                  <td>
                    <img
                      src={require("../../img/search111.png")}
                      alt="searchbuttonIndex"
                      className="searchbuttonIndex"
                    ></img>{" "}
                    |
                    <img
                      src={require("../../img/edit111.png")}
                      alt="editbuttonIndex"
                      className="editbuttonIndex"
                    ></img>
                    |
                    <img
                      src={require("../../img/trash111.png")}
                      alt="deletebuttonIndex"
                      className="deletebuttonIndex"
                    ></img>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Simanunglit</td>
                  <td>Semarang - Bandung</td>
                  <td>permata.jpg</td>
                  <td>Approved</td>
                  <td>
                    <img
                      src={require("../../img/search111.png")}
                      alt="searchbuttonIndex"
                      className="searchbuttonIndex"
                    ></img>{" "}
                    |
                    <img
                      src={require("../../img/edit111.png")}
                      alt="editbuttonIndex"
                      className="editbuttonIndex"
                    ></img>
                    |
                    <img
                      src={require("../../img/trash111.png")}
                      alt="deletebuttonIndex"
                      className="deletebuttonIndex"
                    ></img>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Simanunglit</td>
                  <td>Semarang - Bandung</td>
                  <td>permata.jpg</td>
                  <td className="CancelIndex">Cancel</td>
                  <td>
                    <img
                      src={require("../../img/search111.png")}
                      alt="searchbuttonIndex"
                      className="searchbuttonIndex"
                    ></img>
                    {}|
                    <img
                      src={require("../../img/edit111.png")}
                      alt="editbuttonIndex"
                      className="editbuttonIndex"
                    ></img>
                    |
                    <img
                      src={require("../../img/trash111.png")}
                      alt="deletebuttonIndex"
                      className="deletebuttonIndex"
                    ></img>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Simanunglit</td>
                  <td>Semarang - Bandung</td>
                  <td>permata.jpg</td>
                  <td>Approved</td>
                  <td>
                    <img
                      src={require("../../img/search111.png")}
                      alt="searchbuttonIndex"
                      className="searchbuttonIndex"
                    ></img>{" "}
                    |
                    <img
                      src={require("../../img/edit111.png")}
                      alt="editbuttonIndex"
                      className="editbuttonIndex"
                    ></img>
                    |
                    <img
                      src={require("../../img/trash111.png")}
                      alt="deletebuttonIndex"
                      className="deletebuttonIndex"
                    ></img>
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Simanunglit</td>
                  <td>Semarang - Bandung</td>
                  <td>permata.jpg</td>
                  <td>Approved</td>
                  <td>
                    <img
                      src={require("../../img/search111.png")}
                      alt="searchbuttonIndex"
                      className="searchbuttonIndex"
                    ></img>{" "}
                    |
                    <img
                      src={require("../../img/edit111.png")}
                      alt="editbuttonIndex"
                      className="editbuttonIndex"
                    ></img>
                    |
                    <img
                      src={require("../../img/trash111.png")}
                      alt="deletebuttonIndex"
                      className="deletebuttonIndex"
                    ></img>
                  </td>
                </tr>
              </tbody>
            </Table>
            <div className="footerAdminIndex"></div>
          </div>
        );
    }
}
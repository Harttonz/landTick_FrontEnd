import React, { Component } from "react";
import "./addticket.css";
import {Link} from "react-router-dom";
import { Form } from "react-bootstrap";
export default class Addticket extends Component {
  render() {
    return (
      <div className="adminPageAddTicket">
        <div className="navAdminAddTicket">
          <img
            src={require("../../img/trainlogo.png")}
            className="trainlogofirstAdminAddTicket"
            alt="trainlogofirstAdminAddTicket"
          ></img>
          <div class="dropdownAddTicket">
            <img
              src={require("../../img/admin.png")}
              className="dropbtnAddTicket"
              alt="dropbtnAddTicket"
            ></img>
            <div class="dropdown-contentAddTicket">
              <div className="link1AddTicket">
                <img
                  src={require("../../img/ticket11.png")}
                  className="ticketbuttonAddTicket"
                  alt="ticketbuttonAddTicket"
                ></img>
                <div className="myticketTextAddTicket"> My Ticket</div>
              </div>
              <div className="link1AddTicket">
                <img
                  src={require("../../img/logout.png")}
                  alt="logoutbuttonAddTicket"
                  className="logoutbuttonAddTicket"
                ></img>
                <Link to="user">
                  <div className="logouttextAddTicket">Logout</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="tlAddticket">Transaction List</div>
        <div className="addTicketAddTicket">
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Train's Name"
              className="formInputaddAddTicket"
              name="Name"
              autoComplete="true"
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Kind of Train"
              className="formInputaddAddTicket"
              name="email"
              autoComplete="true"
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="E-mail"
              placeholder="Departute Date"
              className="formInputaddAddTicket"
              name="password"
              autoComplete="true"
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Departure Station"
              className="formInputaddAddTicket"
              name="phone"
              autoComplete="true"
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Departure Time"
              className="formInputaddAddTicket"
              name="gender"
              autoComplete="true"
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Station's Destination"
              className="formInputaddAddTicket"
              name="phone"
              autoComplete="true"
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Arrival"
              className="formInputaddAddTicket"
              name="address"
              autoComplete="true"
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Price"
              className="formInputaddAddTicket"
              name="address"
              autoComplete="true"
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Quantity"
              className="formInputaddAddTicket"
              name="address"
              autoComplete
            ></Form.Control>
          </Form.Group>
          <Form />
        </div>
        <button type="button" className="addticketSavingAddTicket">
          Save
        </button>
        <div className="footerAddticket"></div>
      </div>
    );
  }
}

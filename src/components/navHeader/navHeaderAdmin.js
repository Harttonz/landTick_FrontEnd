import React, { Component } from "react";
import "./navHeaderAdmin.css";
import { checkloginAction } from "../../_actions/user";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
class NavHeader extends Component {
  constructor() {
    super();
    this.state = {
      userData: []
    };
  }
  close = () => {
    window.localStorage.removeItem("token");
    window.location.href = "http://localhost:3000/";
  };
  componentDidMount() {
    this.props.checkloginAction();
    const token = window.localStorage.getItem("token");
    this.props.checkloginAction(token)
  }
  render() {
    const {dataLogin} = this.props.checkLogin;
    console.log("this is part of checklogin",dataLogin);
    return (
      <div className="navAdmin">
        <img
          src={require("../../img/trainlogo.png")}
          className="trainAdmin"
          alt="trainlogofirstDSH"
        ></img>
        <div className="dropdownAdmin">
          <div className="Admin">
            {dataLogin.admin === true ? dataLogin.role :""}
          </div>
          <img
            src={require("../../img/account.png")}
            className="dropbtnAdmin"
            alt="dropbtnAdmin"
          ></img>
          <div class="dropdown-contentAdmin">
            <Link to="/addticket">
              <div className="link1Admin">
                <img
                  src={require("../../img/ticket11.png")}
                  className="ticketbuttonAdmin"
                  alt="ticketbuttonAdmin"
                ></img>
                <div className="TEXT">Add Ticket</div>
              </div>
            </Link>
            <Link to="/listTransaction">
              <div className="link1Admin">
                <img
                  src={require("../../img/ticket11.png")}
                  className="ticketbuttonAdmin"
                  alt="ticketbuttonAdmin"
                ></img>
                <div className="TEXT">List Transaction</div>
              </div>
            </Link>
            <div className="link1Admin" onClick={this.close}>
              <img
                src={require("../../img/logout.png")}
                alt="logoutbuttonAdmin"
                className="logoutbuttonAdmin"
              ></img>
              <div className="logouttextAdmin">Logout</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    checkLogin: state.checkLogin
  };
};
const mapDispatchToProps = dispatch => {
  return {
    checkloginAction: (token) => dispatch(checkloginAction(token))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavHeader);

import React, { Component } from "react";
import "./navHeader.css";
import { checkloginAction } from "../../_actions/user";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class NavHeader extends Component {
  constructor(){
  super()
  this.state = {
    userData :[]
   }
  }
  close = () => {
    window.localStorage.removeItem("token");
    window.location.href = "http://localhost:3000/";
  };
  componentDidMount() {
    const token = window.localStorage.getItem("token");
    this.props.checkloginAction(token)
  }
  render() {
    const {dataLogin} = this.props.checkLogin;
    console.log("this is part of checklogin",dataLogin);
    return (
      <div className="navDashboard">
        <img
          src={require("../../img/trainlogo.png")}
          className="trainlogofirstDSH"
          alt="trainlogofirstDSH"
        ></img>
           <div className="userDSH">
          {dataLogin.admin === false ? dataLogin.username :""}
          </div>
        <div className="dropdownDSH">
          <img
            src={require("../../img/account.png")}
            className="dropbtnDSH"
            alt="dropbtnDSH"
          ></img>
          <div class="dropdown-contentDSH">
            <Link to="/myticket">
              <div className="link1DSH">
                <img
                  src={require("../../img/ticket11.png")}
                  className="ticketbuttonDSH"
                  alt="ticketbuttonDSH"
                ></img>
                <div className="TEXT">My Ticket</div>
              </div>
            </Link>
            <Link to="/payment">
              <div className="link1DSH">
                <img
                  src={require("../../img/payment11.png")}
                  className="paymentbuttonDSH"
                  alt="paymentbuttonDSH"
                ></img>
                <div>Payment</div>
              </div>
            </Link>
            <div className="link1DSH" onClick={this.close}>
              <img
                src={require("../../img/logout.png")}
                alt="logoutbuttonDSH"
                className="logoutbuttonDSH"
              ></img>
              <div className="logouttextDSH">Logout</div>
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


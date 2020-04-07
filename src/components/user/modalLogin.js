import React, { Component } from "react";
import {Modal, Form } from "react-bootstrap";
import{Redirect,Link} from "react-router-dom";
import { signIn } from "../../_actions/user";
import{connect} from "react-redux";
import "./modalLogin.css";
class ModalLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      username: "",
      password: "",
      valid: ""
    };
  }
  validation() {
    let message = "";
    let saving = false;
    if (
      this.state.username === "" ||
      this.state.password === "" 
    ) {
      message = "Make sure fulfilled the blank field";
      this.setState({
        valid: message
      });
      saving = false;
    } else {
      this.setState({
        valid: ""
      });
      saving = true;
    }
    return saving;
  }
  handleModal = () => {
    this.setState({ show: !this.state.show });
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = async e => {
    e.preventDefault();
    if(this.validation()){
    const data = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.userSign1(data);
  }
  };
  render() {
    const {dataUser} = this.props.user;
    console.log("this is content of", dataUser);
    const {admin,message,token} = this.props.user.dataUser;
    if (message === "success") {
      window.localStorage.setItem("token", token);
      if (admin === true) window.location.href = "http://localhost:3000/admin";
      else window.location.href = "http://localhost:3000/dashboard";
    }
    return (
      <>
        <button className="loginBtn" onClick={() => this.handleModal()}>
          Login
        </button>

        <Modal
          show={this.state.show}
          onHide={() => this.handleModal()} 
          animation={false}
        >
          <div id="login"></div>
          <Form onSubmit={this.handleSubmit}>
            <div
              style={{
                paddingLeft: "40px",
                paddingRight: "40px",
                paddingTop: "20px",
                paddingBottom: "40",
                textAlign: "center",
                alignContent: "center"
              }}
            >
              <h2>Welcome.</h2>
              {this.state.valid !== "" ? (
                <div className="alert alert-danger ">
                  <i /> Make sure fulfilled the blank field
                </div>
              ) : (
               ""
              )}
            </div>
            <Form.Group>
              <Form.Control
                type="userName"
                placeholder="User Name"
                id="formInput"
                name="username"
                autoComplete="off"
                onChange={this.handleChange}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="password"
                placeholder="Password"
                id="formInput"
                name="password"
                autoComplete="off"
                onChange={this.handleChange}
              ></Form.Control>
            </Form.Group>
            <div>
              <button className="logged">Login</button>
              <div className="infologin">
                Already have account yet ???
                <span className="click">Click Here</span>
              </div>
            </div>
          </Form>
        </Modal>
      </>
    );
  }
}

// mapStateToProps of reducer
const mapStateToProps = state => {
  return {
    user: state.signIn
  };
};

// dispatch actions
const mapDispatchToProps = dispatch => {
  return {
    userSign1: user => dispatch(signIn(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalLogin);


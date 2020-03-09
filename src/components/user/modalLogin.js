import React, { Component } from "react";
import {Modal, Form } from "react-bootstrap";
import{Redirect} from "react-router-dom";
import {login} from "../../_actions/login";
import{connect} from "react-redux";
import "./modalLogin.css";
class ModalLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[],
      show: false,
      username: "",
      password: "",
    };
  }
  handleModal = visible => {
  this.setState({ show: !visible });
  };
  onChangeField = event => {
  console.log(event.target.name+":"+event.target.value);
  this.setState({ username: event.target.value });
  };
  login = e => {
    e.preventDefault();
    const data = {
      username: this.state.username,
      password: this.state.password
    };
    console.log(data);
    this.props.login(data);
    // localStorage.getItem("token"); 
  };
  render() {
    const { show } = this.state;
    const { data } = this.props.loginR;
    return (
      <>
        {data.token !== null ? <Redirect to="/admin" /> : ""}
        <button className="loginBtn" onClick={() => this.handleModal(show)}>
          Login
        </button>

        <Modal show={show} onHide={() => this.handleModal(show)}>
          <div id="login"></div>
          <Form>
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
              <h4>{this.state.message}</h4>
            </div>
            <Form.Group>
              <Form.Control
                type="userName"
                placeholder="User Name"
                id="formInput"
                name="username"
                autoComplete="true"
                onChange={this.onChangeField}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="password"
                placeholder="Password"
                id="formInput"
                name="password"
                autoComplete="true"
                onChange={this.onChangeField}
              ></Form.Control>
            </Form.Group>
            <div>
              <button className="logged" onClick={this.login}>
                Login
              </button>
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
const mapStateToProps = state =>{
  return {
    loginR: state.loginR
  };
}
const mapDispacthAction = dispatch =>{
  return{
    login : data=>{
      dispatch(login(data));
    }
  }
}

export default connect(mapStateToProps,mapDispacthAction)(ModalLogin);

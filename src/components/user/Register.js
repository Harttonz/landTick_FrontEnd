import React, { Component } from "react";
import { Modal, Form} from "react-bootstrap";
import {register} from "../../_actions/user"
import "./Register.css";
import { connect } from "react-redux";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      name: "",
      username: "",
      email: "",
      password: "",
      gender: "",
      phone: "",
      address: "",
      errPass: ""
    };
  }
handleSubmit = e => {
    e.preventDefault();
    const data = {
      name: this.state.name,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      gender: this.state.gender,
      phone: this.state.phone,
      address: this.state.address
    };
    this.props.register(data);
  }
  handleModal = visible => {
    this.setState({ show: !visible });
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };


  validate(){
    let vpass = "";
    console.log(this.state.password.length);
    if (!this.state.password.length < 6) {
      vpass = "The password must be more than 6 digits long";
    }
    this.setState({
      errPass: vpass
    });
  }
  render() {
             const { show } = this.state;

             const { dataUser } = this.props.data;
              // console.log("data user register => ", dataUser);
             if (dataUser.message === "success") {
               localStorage.setItem("token", dataUser.token);
               window.location.href = "http://localhost:3000/";
             }

             return (
               <>
                 <button id="reg-btn" onClick={() => this.handleModal(show)}>
                   Register
                 </button>

                 <Modal
                   show={show}
                   onHide={() => this.handleModal(show)}
                   animation={false}
                 >
                   <div>
                     <Modal.Title className="registrasi">
                       Register Form
                     </Modal.Title>
                   </div>
                   <Form onSubmit={this.handleSubmit}>
                     <Form.Group>
                       <Form.Control
                         type="text"
                         placeholder="Full Name"
                         id="formInputReg"
                         name="name"
                         autoComplete="off"
                         onChange={this.handleChange}
                       ></Form.Control>
                     </Form.Group>
                     <Form.Group>
                       <Form.Control
                         type="text"
                         placeholder="Username"
                         id="formInputReg"
                         name="username"
                         autoComplete="off"
                         onChange={this.handleChange}
                       ></Form.Control>
                     </Form.Group>
                     <Form.Group>
                       <Form.Control
                         type="email"
                         placeholder="E-mail"
                         id="formInputReg"
                         name="email"
                         autoComplete="off"
                         onChange={this.handleChange}
                       ></Form.Control>
                     </Form.Group>
                     {this.state.errPass.length > 0 ? (
                       <div class="alert alert-danger" role="alert">
                         {this.state.errPass}
                       </div>
                     ) : null}
                     <Form.Group>
                       <Form.Control
                         type="password"
                         placeholder="Password"
                         id="formInputReg"
                         name="password"
                         autoComplete="off"
                         onChange={this.handleChange}
                       ></Form.Control>
                     </Form.Group>
                     <Form.Group>
                       <Form.Control
                         as="select"
                         Id="formInputReg"
                         name="gender"
                         onChange={this.handleChange}
                       >
                         <option value="male">Male</option>
                         <option value="female">Female</option>
                       </Form.Control>
                     </Form.Group>
                     <Form.Group>
                       <Form.Control
                         type="text"
                         placeholder="Phone"
                         id="formInputReg"
                         name="phone"
                         autoComplete="off"
                         onChange={this.handleChange}
                       ></Form.Control>
                     </Form.Group>
                     <Form.Group>
                       <Form.Control
                         type="text"
                         placeholder="Address"
                         id="formInputReg"
                         name="address"
                         autoComplete="off"
                         onChange={this.handleChange}
                       ></Form.Control>
                     </Form.Group>
                     <button className="registrated">Registration</button>
                   </Form>
                 </Modal>
               </>
             );
           }
}

const mapStateToProps = state => {
  return {
    data: state.register
  };
};

const mapDispatchToProps = dispatch => {
  return {
    register: user => dispatch(register(user))
  };
};

// export default MdlRegister;
export default connect(mapStateToProps, mapDispatchToProps)(Register);

// export default Register;

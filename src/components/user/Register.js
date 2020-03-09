import React, { Component } from "react";
import { Modal, Form } from "react-bootstrap";
import "./Register.css";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  handleModal = visible => {
    this.setState({ show: !visible });
  };

  render() {
    const { show } = this.state;

    return (
      <>
        <button id="reg-btn" onClick={() => this.handleModal(show)}>
          Register
        </button>
        <Form>
          <Modal show={show} onHide={() => this.handleModal(show)}>
            <div>
              <Modal.Title className="registrasi">Register Form</Modal.Title>
            </div>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Name"
                id="formInputReg"
                name="Name"
                autoComplete="true"
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Username"
                id="formInputReg"
                name="email"
                autoComplete="true"
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="E-mail"
                placeholder="Email"
                id="formInputReg"
                name="password"
                autoComplete="true"
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Password"
                id="formInputReg"
                name="phone"
                autoComplete="true"
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Gender"
                id="formInputReg"
                name="gender"
                autoComplete="true"
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Phone"
                id="formInputReg"
                name="phone"
                autoComplete="true"
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Address"
                id="formInputReg"
                name="address"
                autoComplete="true"
              ></Form.Control>
            </Form.Group>
              <button className="registrated">Registration</button>
          </Modal>
        </Form>
      </>
    );
  }
}


export default Register;

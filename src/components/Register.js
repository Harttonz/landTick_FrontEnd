import React, { Component } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import "./Register.css";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  handleModal = visible => {
    this.setState({ show: !visible });
  };

  render() {
    const { show } = this.state;

    return (
      <>
        <Button
          className="btn-login"
          variant="outline-light"
          onClick={() => this.handleModal(show)}
        >
          Register
        </Button>

        <Modal
          show={show}
          onHide={() => this.handleModal(show)}
          className="pageBorder"
        >
          <div>
            <Modal.Title className="registrasi">Registration</Modal.Title>
          </div>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Breeder"
              className="formInput"
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="E-mail"
              className="formInput"
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="password"
              placeholder="password"
              className="formInput"
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Phone Breeder"
              className="formInput"
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Address Breeder"
              className="formInput"
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Name Pet"
              className="formInput"
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Gender Pet"
              className="formInput"
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Control as="Select" className="selection">
              <option>species pet</option>
              <option>1</option>
              <option>2</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Age Pet"
              className="formInput"
            ></Form.Control>
          </Form.Group>
          <div className="btn">
            <Button variant="secondary">Registration</Button>
          </div>
        </Modal>
      </>
    );
  }
}

export default Register;

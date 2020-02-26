import React, { Component } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import {Link} from "react-router-dom";
import "./modalLogin.css";

class ModalLogin extends Component {
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
          Login
        </Button>

        <Modal show={show} onHide={() => this.handleModal(show)}>
         <Modal.Title className="login">Login</Modal.Title>
          <Form.Group>
            <Form.Control
              type="Email"
              placeholder="Email"
              className="formInput"
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="password"
              placeholder="Password"
              className="formInput"
            ></Form.Control>
          </Form.Group>
          <div className="btn">
            <Link to="/dashboard">
              <Button variant="secondary">Login</Button>
            </Link>
          </div>
        </Modal>
      </>
    );
  }
}

export default ModalLogin;

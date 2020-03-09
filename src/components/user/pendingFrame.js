import React, { Component } from "react";
import { Modal, Form } from "react-bootstrap";
import "./pendingFrame.css";
import { Link } from "react-router-dom";
class Pending extends Component {
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
        <button
          className="paynowPayment"
          onClick={() => this.handleModal(show)}
        >
          Pay Now
        </button>

        <Modal show={show} onHide={() => this.handleModal(show)}>
          <div className="pendingstatus">
            your payment will be confirmed at 1 X 24 hours for seeing order
            click
            <Link to="myticketApproved">
              <span className="here">here</span>
            </Link>
            ,thanks !!!!!
          </div>
        </Modal>
      </>
    );
  }
}
export default Pending;

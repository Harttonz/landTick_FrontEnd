import React, { Component } from "react";
import "./delete.css";
import { Modal, Form ,Alert} from "react-bootstrap";
import axios from "axios";
import { BaseUrl, headerAuthorization } from "../../config/headerToken";
export default class Delete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  handleModal = visible => {
    this.setState({ show: !visible });
  };
  changeStatus = e => {
    this.setState({
      status: e.target.value
    });
  };
  save = async () => {
    try {
      await axios({
        method: "DELETE",
        url: `${BaseUrl}/orders/${this.props.data.id}`,
        headers: headerAuthorization
      });
      window.location.href = "http://localhost:3000/admin";
    } catch (err) {
      console.log(err.message);
    }
  };
  cancel = async () =>{
       window.location.href = "http://localhost:3000/admin";
  }
  render() {
    const { show } = this.state;
    console.log("deleted data", this.props.data);
    return (
      <>
        <img
          src={require("../../img/trash111.png")}
          alt="editbuttonIndex"
          className="editbuttonIndex"
          onClick={() => this.handleModal(show)}
        ></img>
        <Modal size="md" show={show} onHide={() => this.handleModal(show)}>
          <Form>
            <Alert variant="success">
              <div className="notice">
                Are you sure you want to delete this data ?
              </div>
            </Alert>
            <div>
              <button className="Deleted" onClick={this.cancel}>
                Cancel
              </button>
              <button className="cancelButton" onClick={this.save}>
                Delete
              </button>
            </div>
          </Form>
        </Modal>
      </>
    );
  }
}

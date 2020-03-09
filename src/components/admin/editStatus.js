import React,{Component} from "react";
import "./editStatus.css";
import {Modal,Form} from "react-bootstrap";
import { Thumbnail } from "react-bootstrap";


export default class Editstatus extends Component{
   constructor(props){
   super(props);
   this.state = {
       show :false
    };
   }

   handleModal = visible =>{
       this.setState({show:!visible});
   }
render(){
    const {show} = this.state;
return (
  <>
    <img
      src={require("../../img/edit111.png")}
      alt="editbuttonIndex"
      className="editbuttonIndex"
      onClick={() => this.handleModal(show)}
    ></img>
    <Modal size="md" show={show} onHide={() => this.handleModal(show)}>
      <img
        src={require("../../img/rightlogo.png")}
        className="rightLogoES"
      ></img>
      <Form>
        <Form.Group>
          <input type="email" placeholder="1" className="InputFormES" />
        </Form.Group>
        <Form.Group>
          <input
            type="password"
            placeholder="Harttonz"
            className="InputFormES"
          />
        </Form.Group>
        <Form.Group>
          <input
            type="password"
            placeholder="Surabaya - Jakarta"
            className="InputFormES"
          />
        </Form.Group>
        <Form.Group>
          <input
            type="password"
            placeholder="bca.jpg"
            className="InputFormES"
          />
        </Form.Group>
        <Form.Group>
          <input
            type="password"
            placeholder="Approved"
            className="InputFormES"
          />
        </Form.Group>
        <div>
          <button className="loggedES">Save</button>
          <div className="infologinES">
            Already have account yet ???
            <span className="clickES">Click Here</span>
          </div>
        </div>
      </Form>
    </Modal>
  </>
);
 }

}
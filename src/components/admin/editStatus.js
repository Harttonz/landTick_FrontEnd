import React,{Component} from "react";
import "./editStatus.css";
import {Modal,Form} from "react-bootstrap";
import { Thumbnail } from "react-bootstrap";
import axios from "axios";
import { BaseUrl, headerAuthorization } from "../../config/headerToken";
export default class Editstatus extends Component {
                 constructor(props) {
                   super(props);
                   this.state = {
                     show: false,
                     status: "Approved"
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
                       method: "PATCH",
                       data: {
                         status: this.state.status
                       },
                       url:`${BaseUrl}/order/${this.props.data.id}`,
                       headers: headerAuthorization
                     });
                     window.location.href = "http://localhost:3000/admin";
                   } catch (err) {
                     console.log(err.message);
                   }
                 };
                 render() {
                   const { show } = this.state;
                   console.log("edit data", this.props.data);
                   return (
                     <>
                       <img
                         src={require("../../img/edit111.png")}
                         alt="editbuttonIndex"
                         className="editbuttonIndex"
                         onClick={() => this.handleModal(show)}
                       ></img>
                       <Modal
                         size="md"
                         show={show}
                         onHide={() => this.handleModal(show)}
                       >
                         <img
                           src={require("../../img/rightlogo.png")}
                           className="rightLogoES"
                         ></img>
                         <Form>
                           <Form.Group>
                             <input
                               type="text"
                               placeholder="1"
                               className="InputFormES"
                               value={this.props.data.id}
                             />
                           </Form.Group>
                           <Form.Group>
                             <input
                               type="text"
                               placeholder="Harttonz"
                               className="InputFormES"
                               value={this.props.data.user.username}
                             />
                           </Form.Group>
                           <Form.Group>
                             <input
                               type="text"
                               placeholder="Surabaya - Jakarta"
                               className="InputFormES"
                               value={`${this.props.data.ticket.start_station}-${this.props.data.ticket.destination}`}
                             />
                           </Form.Group>
                           <Form.Group>
                             <input
                               type="text"
                               placeholder="bca.jpg"
                               className="InputFormES"
                               value={this.props.data.attachment}
                             />
                           </Form.Group>
                           <Form.Group>
                             <Form.Label className="textStatus">
                               Status
                             </Form.Label>
                             <Form.Control
                               as="Select"
                               onChange={this.changeStatus}
                               className="InputFormES"
                             >
                               <option value="Approved">Approved</option>
                               <option value="Pending">Pending</option>
                               <option value="Cancel">Cancel</option>
                             </Form.Control>
                           </Form.Group>
                           <div>
                             <button className="loggedES" onClick={this.save}>
                               Save
                             </button>
                           </div>
                         </Form>
                       </Modal>
                     </>
                   );
                 }
               }
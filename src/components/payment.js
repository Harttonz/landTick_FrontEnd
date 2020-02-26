import React,{Component} from "react";
import "./payment.css";
import {Button,Form,Modal} from "react-bootstrap";
import {Link} from "react-router-dom";

export default class Payment extends Component {
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
                         className="prbtnsave"
                         onClick={() => this.handleModal(show)}
                       >
                         Add Pet
                       </Button>

                       <Modal
                         className="Box"
                         show={show}
                         onHide={() => this.handleModal(show)}
                       >
                         <div>
                           <p className="pre">Premium</p>
                           <div className="upgrade">
                             <p className="up1">
                               Upgrade On finder Mu dan Nikmati fitur fitur
                               <span>Pro</span>
                             </p>
                             <p className="up2">Onfinder : 8789399</p>
                           </div>
                         </div>
                         <input
                           type="text"
                           placeholder="NO.REK KAMU"
                           className="iNoRek"
                         ></input>
                         <div className="boxcam">
                           <img
                             src={require("../img/icon/camera.png")}
                             className="cam"
                           ></img>
                         </div>
                         <button type="button" className="btnkirim" onClick={alert("Terima kasi")}>
                           Kirim
                         </button>
                       </Modal>
                     </>
                   );
                 }
               }
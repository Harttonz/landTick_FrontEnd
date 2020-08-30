import React,{Component} from "react";
import "./detail.css";
import {Modal} from "react-bootstrap";
import { getDayName} from "../functional/utilities";
export default class DetailScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            show:false
        };
    }
    handleModal = visible => {
        this.setState({show:!visible});
    }
    handleClose = visible => {
      this.setState({show:false});
  }
   render(){
       const {show} = this.state;
   return (
         <>
            <button className="primary" type="submit" onClick={() => this.handleModal(show)}>Detail</button>
            <Modal size="lg" show={show} onHide={() => this.handleModal(show)}>
              <div className="logo-modal">                
                  <button onClick={() => this.handleClose()}>&times;</button> 
              </div>
              <div className="modal-title-detail-user">
                 <div>
                    <div>E-Ticket</div>
                    <div>
                        Invoice Code : INV000{this.props.data.id}
                    </div>
                 </div>
                 <img src={require("../../asset/modal-brand.png")}/>
              </div>
              <div className="product-container-user">
                      <div className="product-info-user-upper">
                          <div>
                                <div>kereta api</div>
                                <p>{getDayName(this.props.data.ticket.start_date)}</p>                          
                          </div>
                          <div>
                                <div>{this.props.data.ticket.name}</div>
                                <p>{this.props.data.ticket.train.name}</p>
                          </div>
                          <ul className="product-info-user-lower">
                            <li>
                                <img src={require("../../asset/linethrough.png")}/>
                            </li>
                            <li>
                                <div>
                                    <div>{this.props.data.ticket.start_time}</div>
                                    <div>{this.props.data.ticket.start_date}</div>
                                </div>
                                <div>
                                    <div>{this.props.data.ticket.start_station}</div>
                                    <div>{this.props.data.ticket.start_station} st.</div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <div>{this.props.data.ticket.arrival_time}</div>
                                    <div>{this.props.data.ticket.start_date}</div>
                                </div>
                                <div>
                                    <div>{this.props.data.ticket.destination}</div>
                                    <div> {this.props.data.ticket.destination} st.</div>
                                </div>
                            </li>
                          </ul>
                      </div>
                      <div className="product-image-user">
                        <img src={require("../../asset/barcode.png")}/>
                      </div>
                </div>   
                <ul className="product-detail-notice">
                    <li> 
                        <div>
                            <img src={require("../../asset/notify.png")}/>
                        </div>     
                        <p>Show your E-ticket when checking in</p>
                    </li>
                     <li>
                        <div>
                            <img src={require("../../asset/timer.png")}/>
                        </div>
                        <p>Make sure that you must be checked at 90 minutes early before
                         departure</p>
                    </li>
                     <li>
                        <div>
                            <img src={require("../../asset/declar.png")}/>
                        </div>
                        <p>the time that availale based on time zone local</p>
                    </li>
                </ul> 
                <div className="product-info-user-detail">
                      <table>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>E-mail</th>
                        </tr>
                        <tr>
                            <td>{this.props.data.user.id}</td>
                            <td>{this.props.data.user.phone}</td>
                            <td>{this.props.data.user.phone}</td>
                            <td>{this.props.data.user.email}</td>
                        </tr>
                      </table>
                </div>        
            </Modal>
        </>);
   }
}

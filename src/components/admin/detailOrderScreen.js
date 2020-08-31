import React,{Component} from "react";
import "./detailOrder.css";
import {Modal} from "react-bootstrap";
import { getDayName, GetIDR } from "../functional/utilities";
export default class DetailOrder extends Component{
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
       <button type="submit" onClick={() => this.handleModal(show)}><i className="fa fa-search"></i></button>
       <Modal size="lg" show={show} onHide={() => this.handleModal(show)}>
              <div className="logo-modal-admin">
                  <img src={require("../../asset/modal-brand.png")}/>
                  <button onClick={() => this.handleClose()}>&times;</button> 
              </div>
              <div className="body-modal-detail-admin">
                  <div className="product-title-detail-admin">
                      <div>E-Ticket</div>
                      <div>
                        Invoice Code : INV000{this.props.data.id}
                      </div>
                  </div>
                  <div className="product-container-admin">
                      <div className="product-info-admin">
                          <div>
                              <div>
                                  <div>The Train</div>
                                  <p>{getDayName(this.props.data.ticket.start_date)}</p>
                              </div>
                              <div>
                                <img src={require("../../asset/barcode2.png")}/>
                              </div>
                          </div>
                          <div>
                            <div>{this.props.data.ticket.name}</div>
                            <p>{this.props.data.ticket.train.name}</p>
                          </div>
                          <div className="product-info-detail-container-admin">
                            <img src={require("../../asset/linethrough.png")}/>
                            <ul className="product-info-detail-admin">
                                <li>
                                    <div>
                                        <div>{this.props.data.ticket.start_time}</div>
                                        <div>{this.props.data.ticket.start_date} st.</div>
                                    </div>
                                    <div>
                                        <div>{this.props.data.ticket.arrival_time}</div>
                                        <div>{this.props.data.ticket.start_date}</div>
                                    </div>   
                                </li>
                                <li> 
                                    <div>
                                        <div>{this.props.data.ticket.start_station}</div>
                                        <div>{this.props.data.ticket.start_station} st.</div>
                                    </div>
                                    <div>
                                        <div>{this.props.data.ticket.destination}</div>
                                        <div> {this.props.data.ticket.destination} st.</div>
                                    </div>
                                </li>
                            </ul>
                          </div>
                      </div>
                      <div className="product-image-admin">
                        <img src={this.props.data.attachment}/>
                      </div>
                  </div>
                  <div className="product-info-admin">
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
                  <div className="product-detail-price-admin">
                      <div>Total</div>
                      <div>{GetIDR(this.props.data.total_price)}</div>
                  </div>
              </div>
       </Modal>
     </>);
 }
}

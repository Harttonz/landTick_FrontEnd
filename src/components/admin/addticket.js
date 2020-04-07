import React, { Component } from "react";
import "./addticket.css";
import {Link} from "react-router-dom";
import { Form } from "react-bootstrap";
import { addticketAction } from "../../_actions/ticketA";
import { typeTrain} from  "../../_actions/typeTrain";
import { connect } from "react-redux";
import NavHeaderAdmin from "../navHeader/navHeaderAdmin";
class Addticket extends Component {
                 constructor(props) {
                   super(props);
                   this.state = {
                     name: "",
                     type_train: "",
                     start_date: "",
                     start_station: "",
                     start_time: "",
                     destination: "",
                     arrival_time: "",
                     price: "",
                     qty: "",
                     valid:"",
                     save:false,
                     saving:false,
                   };
                 }
                 handleSave = e => {
                   e.preventDefault();
                   if (this.validation()=== true) {
                     const data = {
                       name: this.state.name,
                       type_train: {
                         id: this.state.type_train
                       },
                       start_date: this.state.start_date,
                       start_station: this.state.start_station,
                       start_time: this.state.start_time,
                       destination: this.state.destination,
                       arrival_time: this.state.arrival_time,
                       price: this.state.price,
                       qty: this.state.qty
                     };
                     this.props.addticketAction(data);
                   }
                 };     
                validation(){
                  let message = "";
                  let saving = false;
                  if(
                    this.state.name ==="" || 
                    this.state.start_date ==="" || 
                    this.state.start_station ==="" ||
                    this.state.start_time ===""||
                    this.state.destination===""||
                    this.state.arrival_time===""||
                    this.state.price == 0 ||
                    this.state.qty==0 ){
                    message = "Make sure fulfilled the blank field";
                    this.setState({
                      valid : message
                    })
                    saving = false;
                    }else{
                    this.setState({
                        valid:""
                    })
                    saving =true;
                    }
                  return saving;
                }
                handleChange = e =>{
                  this.setState({[e.target.name]:e.target.value})
                }
              componentDidMount(){
                this.props.getTypeA();
              }
              render() {
                         const { ticketData } = this.props.addticket;
                         const { type } = this.props.typeTrainR;
                         return (
                           <div className="adminPageAddTicket">
                             <NavHeaderAdmin />
                             {this.state.valid !== "" ? (
                               <div className="alert alert-danger ">
                                 <i /> Make sure fulfilled the blank field
                               </div>
                             ) : (
                               ""
                             )}
                             <div className="tlAddticket">Add New Ticket</div>
                             <div className="addTicketAddTicket">
                               <Form>
                                 <Form.Group>
                                   <Form.Control
                                     type="text"
                                     placeholder="Train's Name"
                                     className="formInputaddAddTicket"
                                     name="name"
                                     autoComplete="off"
                                     value={this.state.name}
                                     onChange={this.handleChange}
                                   ></Form.Control>
                                 </Form.Group>
                                 <Form.Group>
                                   <Form.Control
                                     as="select"
                                     className="formInputSelectAddTicket"
                                     name="type_train"
                                     onChange={this.handleChange}
                                   >
                                     <option>Select type of train</option>
                                     {type.getType
                                       ? type.getType.map((value, index) => (
                                           <option
                                             value={value.id}
                                             index={index}
                                           >
                                             {value.name}
                                           </option>
                                         ))
                                       : ""}
                                   </Form.Control>
                                 </Form.Group>
                                 <Form.Group>
                                   <Form.Control
                                     type="date"
                                     placeholder="Departure Date"
                                     className="formInputaddAddTicket"
                                     name="start_date"
                                     autoComplete="off"
                                     value={this.state.start_date}
                                     onChange={this.handleChange}
                                   ></Form.Control>
                                 </Form.Group>
                                 <Form.Group>
                                   <Form.Control
                                     type="text"
                                     placeholder="start_station"
                                     className="formInputaddAddTicket"
                                     name="start_station"
                                     autoComplete="off"
                                     value={this.state.station}
                                     onChange={this.handleChange}
                                   ></Form.Control>
                                 </Form.Group>
                                 <Form.Group>
                                   <Form.Control
                                     type="time"
                                     placeholder="Departure Time"
                                     className="formInputaddAddTicket"
                                     name="start_time"
                                     value={this.state.start_time}
                                     autoComplete="off"
                                     onChange={this.handleChange}
                                   ></Form.Control>
                                 </Form.Group>
                                 <Form.Group>
                                   <Form.Control
                                     type="text"
                                     placeholder="Station's Destination"
                                     className="formInputaddAddTicket"
                                     name="destination"
                                     autoComplete="off"
                                     value={this.state.destination}
                                     onChange={this.handleChange}
                                   ></Form.Control>
                                 </Form.Group>
                                 <Form.Group>
                                   <Form.Control
                                     type="time"
                                     placeholder="Arrival"
                                     className="formInputaddAddTicket"
                                     name="arrival_time"
                                     value={this.state.arrival_time}
                                     autoComplete="off"
                                     onChange={this.handleChange}
                                   ></Form.Control>
                                 </Form.Group>
                                 <Form.Group>
                                   <Form.Control
                                     type="text"
                                     placeholder="Price"
                                     className="formInputaddAddTicket"
                                     name="price"
                                     value={this.state.price}
                                     autoComplete="off"
                                     onChange={this.handleChange}
                                   ></Form.Control>
                                 </Form.Group>
                                 <Form.Group>
                                   <Form.Control
                                     type="number"
                                     placeholder="Quantity"
                                     className="formInputaddAddTicket"
                                     name="qty"
                                     value={this.state.qty}
                                     autoComplete="off"
                                     onChange={this.handleChange}
                                   ></Form.Control>
                                 </Form.Group>
                                 <button
                                   type="button"
                                   className="addticketSavingAddTicket"
                                   onClick={this.handleSave}
                                 >
                                   Save
                                 </button>
                               </Form>
                             </div>
                             <div className="footerAddticket"></div>
                           </div>
                         );
                       }
}

const mapStateToProps = state => {
  return {
    addticket: state.ticketR,
    typeTrainR :state.typeTrainR
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTypeA:()=>dispatch(typeTrain()),
    addticketAction: data => dispatch(addticketAction(data))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Addticket);
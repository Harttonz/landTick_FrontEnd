import React,{useState, useEffect} from "react";
import FormData from "form-data";
import {useDispatch,useSelector} from "react-redux";
import {listmyOrder} from "../../_actions/orderAction";
import {Link} from "react-router-dom";
import {Modal} from "react-bootstrap";
import "./payment.css";
import Axios from "axios";
import {getDayName,GetIDR} from "../functional/utilities";
import {saveUpload} from '../../_actions/orderAction';
function PaymentScreen(props){
    const myOrder= useSelector( state => state.myOrder);
    const {loading,error,orders} = myOrder;
    const userSignin = useSelector( state => state.userSignin);
    const {userInfo} = userSignin;
    const dispatch = useDispatch();
    const[file,setFile] = useState('');
    const[message,setMessage] = useState('');
    const[paymentPict,setPaymentPict] = useState('');
    const[filename,setFilename] = useState('');
    const[imgUrl,setImgUrl] = useState('');
    const[errorUpload,setError] = useState('');
    const[showModal,setShowModal]=useState(false);

    const onChange = (e) =>{
       setFile(e.target.files[0]);  
    }
    const getResponse = (res) =>{
        setMessage(res.data.message);
        setFilename(res.data.filename);
        setImgUrl(res.data.payment_url);
    }

    const catchError = (err) =>{
        setError(err.message)
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('payment',file,file.name);
        Axios.post('http://localhost:4000/api/v1/payment',formData,{
            headers:{
                'Content-Type': 'multipart/form-data'
              }
          })
         .then( res => getResponse(res))
         .catch(error => catchError(error))
    }

    const saveData = (id) =>{
        setShowModal(true)
          const data = {
              attachment:imgUrl
          }
          console.log('id',id)
          console.log('attachment',data);
          console.log('attachment',orders);
         dispatch(saveUpload(id,data))
    }

    const params = {
        status:'pending'
    }

    const handleClose = () =>{
        setShowModal(false);
        props.history.push('/');
      }
    useEffect(() => {
        dispatch(listmyOrder(params))
        if(!userInfo){
            props.history.push('/')
        }
       setPaymentPict(imgUrl);
    }, [userInfo])
      return (
        <>
          {loading ? <div>loading..</div> : error ? <div>{error}</div> :  
          orders.length > 0 ?  orders.map ( item => 
          <div className="payment-container" key={item.id}>
              <ul>
                 <li><h1>Invoice</h1></li>
                 <li>
                     <div className="payment-info-user">
                          <div>
                              <img src={require("../../asset/danger.png")}/>
                              <div>
                                <div>You can pay by M-banking,E-banking,ATM with account number bank below</div>
                                <div>N0 : 0898498478877</div>
                              </div>
                          </div>
                          <div className="invoice-user-info">
                              <img src={require("../../asset/brand.png")}/>
                              <table>
                                  <thead>
                                    <tr>
                                        <td>ID</td>
                                        <td>Name</td>
                                        <td>Phone</td>
                                        <td>E-mail</td>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                        <td>{item.user.id}</td>
                                        <td>{item.user.name}</td>
                                        <td>{item.user.phone}</td>
                                        <td>{item.user.email}</td>
                                    </tr>
                                  </tbody>
                              </table>                                                 
                          </div>
                     </div>
                     <div className="payment-info-product">
                        <div className="upper-right-side">
                            <div>
                                <p>The Train</p>
                                <p>{getDayName(item.ticket.start_date)}</p>
                            </div>
                            <img src={require("../../asset/barcode.png")}/>
                        </div>
                        <div className="lower-right-side">
                           <div>
                              <div>{item.ticket.name}</div>
                              <div>{item.ticket.train.name}</div>
                           </div>
                           <div>
                              <div><img src={require("../../asset/linethrough.png")}/></div>
                              <div>
                                    <div>
                                        <div>
                                            <p>{item.ticket.start_time}</p>
                                            <p>{getDayName(item.ticket.start_date)}</p>
                                        </div>
                                        <div>
                                            <p>{item.ticket.arrival_time}</p>
                                            <p>{getDayName(item.ticket.start_date)}</p>
                                        </div>    
                                    </div>
                                    <div> 
                                        <div>
                                            <p>{item.ticket.start_station}</p>
                                            <p>{item.ticket.start_station}</p>
                                        </div>
                                    <div>
                                            <p>{item.ticket.destination}</p>
                                            <p>{item.ticket.start_station}</p>
                                    </div>
                                    </div>   
                              </div>      
                           </div>
                        </div>
                     </div>
                 </li>
              </ul>
              <div className="invoice-title-price">
                  <h1>Detail Price</h1>
                  <div className="invoice-detail-price">
                      <div>
                            <div>
                                <div>
                                    <span>{item.ticket.name} x {item.qty}</span>
                                    <span>({item.ticket.age}) {GetIDR(item.ticket.price)}</span>
                                </div>
                                <div>
                                    <span>Total</span>
                                    <span>{GetIDR(item.total_price)}</span>
                                </div>
                            </div>
                            <button type="submit" className="primary" onClick={ () => saveData(item.id)} disabled={item.createdAt !== item.updatedAt}>Pay Now</button>
                            {showModal ? <Message show={showModal}  onHide={() => setShowModal(false)} close={handleClose}/>: null }
                      </div>
                      <div>
                         <form>
                                <img src={item.attachment || orders && paymentPict}></img>
                                <div>{message ? <p style={{color:'#20B2AA'}}>{message}</p> : <p>Upload as proof</p>}</div>
                                <input type="file"  name="payment" onChange={onChange}/>
                                <button type="submit" className="primary" onClick={submitHandler} disabled={item.createdAt !== item.updatedAt}>upload</button>
                         </form>
                      </div>
                  </div>
              </div>
              {item.createdAt !== item.updatedAt ? <div style={{position:'absolute',left:'45%',top:'70%',translate:'-50%',padding:'.5rem 1rem',background:'#E9967A',borderRadius:'.8rem',color:'#fff',zIndex:'100'}}>Your Payment Is Being Processed !!!</div> : null}
          </div>
        ) : <div style={{position:'absolute',left:'50%',top:'50%',translate:'-50%'}}>No Data Payment <Link to="/" style={{textDecoration:'none'}}>Click Here</Link> To Order Ticket</div>}
        
     </>
      );
}
export default PaymentScreen;   

function Message(props){
    return(
      <Modal {...props} show={props.show} onHide={props.onHide} size="md">
          <button className='hover' style={{position:'relative',left:'0',top:'0',textAlign:'left',color:'ff0000',background:'#1BC47D',border:'none',outline:'none'}} onClick={props.close}>
              X
          </button>
          <Modal.Body>
            <p style={{textAlign:'center'}}>
               Your Payment Has been Submitted !!!
            </p>
          </Modal.Body>
      </Modal>
    )
  }    
              
         
           
import React,{useEffect,useState} from "react";
import {useDispatch,useSelector} from "react-redux";
import {addToCart, removeCart} from "../../_actions/cartAction";
import {createOrder} from "../../_actions/orderAction";
import {Modal} from "react-bootstrap";
import "./card.css";
import {Link} from "react-router-dom";
import {getDayName,GetIDR} from "../functional/utilities";
function CardScreen(props){
   const productId = props.match.params.id;
   const qty = props.location.search? Number(props.location.search.split('=')[1]) : 1;
   const[showModal,setShowModal]=useState(false);
   const[idUser,setIdUser]=useState('');
   const[name,setName]=useState('');
   const[phone,setPhone]=useState('');
   const[email,setEmail]=useState('');
   const[status,setStatus]=useState('pending');
   const cart = useSelector( state => state.cart);
   const {cartItems} = cart;
   const userSignin = useSelector( state => state.userSignin)
   const {userInfo} = userSignin;
   const dispatch = useDispatch();
   const removeFromCart = (productId) =>{
     dispatch(removeCart(productId))
   }
   const order = (id_ticket,qty,total) =>{
    const  data = {
      id_ticket:id_ticket,
      id_user:idUser,
      qty:qty,
      total_price:total,
      status:status,
    } 
      dispatch(createOrder(data));
      dispatch(removeCart(productId))
   }
   const handleClose = () =>{
     setShowModal(false);
     props.history.push('/signin?redirect=/');
   }
   useEffect( () =>{
    if(userInfo === null){
      props.history.push('/signin?redirect=/')
    }else{
      setIdUser(userInfo.id);
      setName(userInfo.name);
      setPhone(userInfo.phone);
      setEmail(userInfo.email)
    }
    if(productId){
       dispatch(addToCart(productId,qty))
     }
   },[userInfo])
    return (
      <>
        <div className="ticket">My Ticket</div>
        <div className="ticket-container">
          <div className="ticket-body">
          { cartItems ?
          cartItems.map ( item => 
          <div className="ticket-content">
              <div>
                <img src={require("../../asset/brand.png")}alt="banner"/>
                <div>
                  <p>The Train</p>
                  <p>{getDayName(item.startDate)}</p>
                </div>
              </div>
              <ul>
                <li>
                  <div>
                      <div>{item.name}</div>
                      <div>{item.type} (H)</div>
                      <div>Pending</div>
                  </div>
                  <div>
                      <img src={require("../../asset/linethrough.png")}/>
                  </div>
                  <div>
                      <div>{item.startTime}</div>
                      <div>{getDayName(item.startDate)}</div>
                      <div>{item.arrivalTime}</div>
                      <div>{getDayName(item.startDate)}</div> 
                  </div>
                  <div>
                      <div>{item.startStation}</div>
                      <div>{item.startStation} St</div>
                      <div>{item.destination}</div>
                      <div>{item.destination} St</div> 
                  </div>
                </li>
              </ul>                
              <div className="ticket-user-price"> 
                  <div>
                    <div>Quantity</div>
                    <div>{item.qty}</div>    
                  </div>
                  <div>
                    <div>price</div>
                    <div>{GetIDR(item.price)}</div>
                  </div>
                  <div>
                    <div>total</div>
                    <div>{GetIDR(item.qty*item.price)}</div>
                  </div>
                  <div>
                      <button type='submit' className="button large-button primary" onClick={ () => removeFromCart(item.product)}>Delete</button>
                  </div>
                  <div>
                      <button type="submit" className="button large-button primary" onClick={ () => order(item.product,item.qty,item.qty*item.price,setShowModal(true))}>Buy Now</button>
                      {showModal ? <Message show={showModal} onHide={() => setShowModal(false)} close={handleClose}/>: null }
                  </div>
              </div>
          </div>  )
          : <div><Link to="/">Choose Product</Link> that you want !!!</div>}
          </div>
          <div className="ticket-user-info" disabled={cartItems.length === 0 }>
              <div>
                <table>
                  <tr>
                      <td>ID</td>
                      <td>Name</td>
                      <td>Phone</td>
                      <td>E-mail</td>
                  </tr>
                  <tr>
                      <td>{idUser}</td>
                      <td>{name}</td>
                      <td>{phone}</td>
                      <td>{email}</td>
                  </tr>
                </table>
              </div>
          </div>
        </div> 
    </>
    );
}
export default CardScreen;
function Message(props){
  return(
    <Modal {...props} show={props.show} onHide={props.onHide} size="md">
        <button className='hover' style={{position:'relative',left:'0',top:'0',textAlign:'left',color:'ff0000',background:'#1BC47D',border:'none',outline:'none'}} onClick={props.close}>
            X
        </button>
        <Modal.Body>
          <p style={{textAlign:'center'}}>
            Your Ticket has been added successfully
          </p>
        </Modal.Body>
    </Modal>
  )
}



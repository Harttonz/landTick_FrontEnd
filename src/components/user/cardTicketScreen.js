import React,{useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import {listmyOrder,deleteOrder} from "../../_actions/orderAction";
import "./ticket.css";
import Detail from "./detailScreen";
import {Link} from "react-router-dom";
import {getDayName,GetIDR} from "../functional/utilities";
function TicketScreen(props){
   const userSignin = useSelector( state => state.userSignin);
   const {userInfo} = userSignin;
   const myOrder= useSelector( state => state.myOrder);
   const {loading,error,orders} = myOrder;
   const onDelete = useSelector( state => state.onDelete);
   const {loading:onLoadingDelete,onDeleteData,error:OnErrorDelete} = onDelete;
   const dispatch = useDispatch();
   const paying = () => {
       props.history.push(`/payment`)
   }
   const deleteproduct = (orderId) =>{
    dispatch(deleteOrder(orderId));
    setTimeout( () =>{
    window.location.reload();
    },100)
   }
   useEffect( () =>{
    dispatch(listmyOrder())
    if(userInfo === null){
        props.history.push('/')
    }
   },[userInfo])

    return (
      <>
    {orders ? <div className="ticket">My Ticket</div> : ""}
    <div style={{textAlign:'center'}}>{onLoadingDelete ? <loading>Loading...</loading> : OnErrorDelete ? <div>{OnErrorDelete}</div> : onDeleteData }</div>
        <div className="ticket-container">
          <div className="ticket-body">
            {loading ? <div>Loading...</div> : error ? <div>{error}</div> : 
              orders.map ( item => 
            <div className="ticket-content">
                <div>
                    <img src={require("../../asset/brand.png")}alt="banner"/>
                    <div>
                    <p>The Train</p>
                    <p>{getDayName(item.ticket.start_date)}</p>
                    </div>
                </div>
                <ul>
                    <li>
                    <div>
                        <div>{item.ticket.name}</div>
                        <div>{item.ticket.train.name} (H)</div>
                        <div>{item.status ==='approved' ? 
                            <p style={{color:'#0000FF',background:'#98FB98',borderRadius:'.3rem',textAlign:'center'}}>approved</p> : 
                            item.status ==='cancel' ? 
                            <p style={{color:'#FF0000',background:'#F4A460',borderRadius:'.3rem',textAlign:'center'}}>cancel</p> : 
                            <p style={{color:'#FFA500',background:'#F0E68C',borderRadius:'.3rem',textAlign:'center'}}>pending</p> }
                        </div>
                    </div>
                    <div>
                        <img src={require("../../asset/linethrough.png")}/>
                    </div>
                    <div>
                        <div>{item.ticket.start_time}</div>
                        <div>{getDayName(item.ticket.start_date)}</div>
                        <div>{item.ticket.arrival_time}</div>
                        <div>{getDayName(item.ticket.start_date)}</div> 
                    </div>
                    <div>
                        <div>{item.ticket.start_station}</div>
                        <div>{item.ticket.start_station} St</div>
                        <div>{item.ticket.destination}</div>
                        <div>{item.ticket.destination} St</div> 
                    </div>
                    </li>
                </ul>                
                <div className="ticket-user-price"> 
                    <div>
                        <div>Quantity</div>
                        <div>{item.qty}
                        
                        </div>
                    </div>
                    <div>
                        <div>price</div>
                        <div>{GetIDR(item.ticket.price)}</div>
                    </div>
                    <div>
                        <div>total</div>
                        <div>{GetIDR(item.total_price)}</div>
                    </div>
                    <div>
                        {item.status === 'approved' ? null:
                        <button className="button large-button primary" type="submit" onClick={() => deleteproduct(item.id)}>Delete</button>}
                    </div>
                    <div>
                      {item.status === 'approved' ?  
                      <Detail data={item}/> : 
                      <button className=" large-button primary" type="submit" onClick={paying}>Pay Now</button>}
                    </div>
                </div>
            </div>)}
          </div>
          

          {userInfo ? 
        //   true
          <div className="ticket-user-info">
            <div>
                <table>
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Phone</td>
                    <td>E-mail</td>
                </tr>
                <tr>
                    <td>{userInfo.id}</td>
                    <td>{userInfo.name}</td>
                    <td>{userInfo.phone}</td>
                    <td>{userInfo.email}</td>
                </tr>
                </table>
            </div>
         </div> : !orders ? "":<div style={{position:'absolute',top:'50%',left:'50%',transform:'translateX(-50%)',display:'inline'}}>You've not order a ticket yet,<Link style={{textDecoration:'none'}} to="/">click here </Link>to order</div>}           
        </div> 
    </>
    );
}
export default TicketScreen;




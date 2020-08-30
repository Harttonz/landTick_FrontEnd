import React, { useEffect,useState} from "react";
import {useSelector,useDispatch} from "react-redux";
import {getListOrder} from "../../_actions/orderAction";
import "./listOrder.css";
import Delete from "./deleteOrderScreen"
import Edit from "./editOrderScreen";
import Detail from "./detailOrderScreen";

function ListOrder(props){
  const dispatch = useDispatch();
  const listOrder = useSelector(state => state.listOrder);
  const {loading,error,orders} = listOrder;
  const userSignin = useSelector( state => state.userSignin);
  const {userInfo} = userSignin;
  useEffect( () =>{
    dispatch(getListOrder());
    if(userInfo == null){
      props.history.push('/')
    }

  },[userInfo])
  return (
    <div className="listOrder-container">
      <h1>Transaction List</h1>
       <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Users</th>
            <th>Tiket</th>
            <th>Status Payment</th>
            <th>Proop Of Payment</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {loading ? <div>Loading...</div> : error ? <div>{error}</div>:
           orders.length > 0 ?  orders.map( item => 
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.user.name}</td>
            <td>{item.ticket.start_station}-{item.ticket.destination}</td>
            <td>{item.status ==="approved" ? 
               <p style={{color:'#0000FF',background:'#98FB98',borderRadius:'.3rem',textAlign:'center'}}>approved</p> : item.status ==='cancel' ? 
               <p style={{color:'#FF0000',background:'#F4A460',borderRadius:'.3rem',textAlign:'center'}}>cancel</p> : 
               <p style={{color:'#FFA500',background:'#F0E68C',borderRadius:'.3rem',textAlign:'center'}}>pending</p> }</td>
            <td>{item.attachment}</td>
            <td>
                <Detail data={item}/>
                <Edit data={item}/>
                <Delete id={item.id} product={item.ticket.name}/>
            </td>
          </tr>) : <div style={{textAlign:'center',position:'absolute',bottom:'0',left:'50%',translate:'-50%',padding:'.4rem',marginBottom:'.6rem',background:'#0078D4',color:'#fff',borderRadius:'.8rem'}}>No Transaction Data !!!</div> }
        </tbody>
      </table>
    </div>
  );
}                
export default ListOrder;                

import React, {useState,useEffect} from "react";
import { Modal,Alert } from "react-bootstrap";
import {useDispatch} from "react-redux";
import "./deleteOrder.css";
import {deleteOrder} from "../../_actions/orderAction";
function  DeleteOrder(props){
const dispatch = useDispatch();
const[show,setShow]=useState(false);
const[product,setproduct]=useState('');
const[id,setId]=useState(1);
const  handleModal = visible => {
    setShow(!visible)
};
const handleClose = () =>{
   setShow(false);

}
const handleDelete = () =>{
  dispatch(deleteOrder(id));
  setShow(false);
  window.location.reload(); 
}
useEffect( () =>{
  setId(props.id);
  setproduct(props.product)
},[])
return(
      <>
      <button onClick={() => handleModal(show)}><i className="fa fa-trash"></i></button>
        <Modal show={show} onHide={() => handleModal(show)}>
          <div className="delete-info">
              <Alert variant="success center-position">
               <div>Are you sure you want to delete <span>{product}</span> ?</div>
               <button onClick={() => handleClose()}>&times;</button> 
              </Alert>
              <div className="delete-container">
                <button onClick={handleDelete}>Delete</button>
                <button onClick={handleClose}>Cancel</button>
              </div>
          </div>
        </Modal>
      </>
    );
}
export default DeleteOrder;

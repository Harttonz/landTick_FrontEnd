import React,{useState,useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import "./editOrder.css";
import {updateOrder} from "../../_actions/orderAction";
import {Modal} from "react-bootstrap";

export default function Editstatus(props) {
  const onUpdate = useSelector(state => state.onUpdate);
  const {loading,error,onUpdateData} = onUpdate;
  const[show,setShow]=useState(false);
  const[id,setId]=useState(1);
  const[status,setStatus]=useState(1);
  const dispatch = useDispatch();
  const  handleModal = visible => {
      setShow(!visible)
  };
  const handleClose = () =>{
     setShow(false);
     window.location.reload();
  } 
  const updateHandler = () =>{
    const statusData = {
      status:status
    }
    dispatch(updateOrder(id,statusData));
  }
  useEffect( () =>{
    setId(props.data.id);
  },[])
  return (
          <>
          <button onClick={() => handleModal(show)}><i className="fa fa-edit"></i></button> 
          <Modal size="sm" show={show} onHide={() => handleModal(show)}>
            <div className="form-edit-header">
              <img src={require("../../asset/brand.png")}></img>
              <button onClick={() => handleClose()}>&times;</button> 
            </div>
            <div className="form-edit">
              { props.data ? 
              <ul className="edit-container">
                <li>
                  {loading ? <div>Loading...</div> : error ? <div>{error}</div>:<div className="message">{onUpdateData}</div>}
                </li>
                <li>
                    <input type="text" disabled={true} value={props.data.id} onLoad={ (e) => setId(e.target.value)}/>
                </li>
                <li>
                    <input type="text" disabled={true} value={props.data.user.username} />
                </li>
                <li>
                    <input type="text" disabled={true} value={`${props.data.ticket.start_station}-${props.data.ticket.destination}`}/>
                </li>
                <li>
                    <input type="text" disabled={true} value={props.data.attachment}/>
                </li>
                <li>
                    <select type="text" value={props.data.status} onChange={ (e) => setStatus(e.target.value) }>
                      <option value="pending">pending</option>
                      <option value="approved">approved</option>
                      <option value="cancel">cancel</option>
                    </select>
                 </li>
                <li>
                    <button type="submit" className="primary full-width" onClick={updateHandler}>Save</button>
                </li>
              </ul>
              : null }
            </div>
      </Modal>
    </>
  );

}              
               
                  
import React, {useEffect,useState} from "react";
import {useSelector,useDispatch} from "react-redux";
import {Modal} from "react-bootstrap";
import "./addProduct.css";
import {createTypeTrain,listTypeTrain,addProduct} from "../../_actions/productAction";
export default function AddProduct(props){
  const type = useSelector( state => state.type);
  const {loading:loadingType,error:errorType,typeData} = type;
  const[showModal,setShowModal]=useState(false);
  const listType = useSelector(state => state.listType);
  const tickets = useSelector(state => state.product);
  const {loading:loadingData,products,error} = listType;
  const {products:productsSave,error:errorSave,loading:loadingSave} = tickets;
  const userSignin = useSelector( state => state.userSignin);
  const {userInfo} = userSignin;
  const dispatch = useDispatch();
  const[name,setName]=useState('');
  const[id,setId]=useState(1);
  const[age,setAge]=useState('adult');
  const[start_date,setStartDate]=useState('');
  const[start_station,setStartStation]=useState('');
  const[start_time,setStartTime]=useState('');
  const[destination,setDestination]=useState('');
  const[arrival_time,setArrivalTime]=useState('');
  const[price,setPrice]=useState('');
  const[qty,setQty]=useState('');
  const handleClose = () =>{
   setShowModal(false);
   setTimeout(() =>{
      window.location.reload();
   },100)
 }
  useEffect(() => {
   dispatch(listTypeTrain()) 
   if(!userInfo){
      props.history.push('/')
   }
   },[userInfo])
   const createNewTrainData = e =>{
      e.preventDefault();
      dispatch(createTypeTrain(name));
   }
  const createProduct = e =>{
     e.preventDefault();
     const data = {
        name:name,
        type_train:{
           id:id
        },
        age:age,
        start_date:start_date,
        start_station:start_station,
        start_time:start_time,
        destination:destination,
        arrival_time:arrival_time,
        price:price,
        qty:qty
     }
     dispatch(addProduct(data))
     setShowModal(true);
  }
  return (
      <div> 
            {loadingSave ? <div>loading...</div>:errorSave ? <div>{error}</div>:<p style={{position:'absolute',top:'3rem',color:'#808080',fontSize:'2rem',left:'1rem',background:'#eaeaea',padding:'.3rem',borderRadius:'.4rem'}}>{productsSave}</p>}
            <div className="form-add-product">
                  <form onSubmit={createProduct}>
                     <ul className="form-add-left">
                        <li><h2>Add New Form</h2></li>
                        <li>
                           <label htmlFor="name">Name</label>
                           <input type="text" placeholder="Name" name="name" autoComplete="off" onChange={(e) => setName(e.target.value)}/>
                        </li>
                        <li>
                           <label htmlFor="type">Type Train</label>
                           <select type="text"  name="type" autoComplete="off" onChange={(e) => setId(e.target.value)}>
                              {loadingData ? 
                              <div>loading</div>: error ? <div>{error}</div> :
                              products.map( data => 
                              <option value={data.id}>{data.name}</option>
                           )}
                           </select>
                        </li>
                        <li>
                           <label htmlFor="age">Age</label>
                           <select type="text"  name="type" autoComplete="off" onChange={(e) => setAge(e.target.value)}>
                              <option value="child">baby</option>
                              <option value="adult">adult</option>
                           </select>
                        </li>
                        <li>
                           <label htmlFor="departure">Departure Date</label>
                           <input type="date" placeholder="departure" name="departure" autoComplete="off" onChange={(e) => setStartDate(e.target.value)}/>
                        </li>
                        <li>
                           <label htmlFor="departure">From</label>
                           <input type="text" placeholder="departure" name="departure" autoComplete="off" onChange={(e) => setStartStation(e.target.value)}/>
                        </li>
                        <li>
                           <label htmlFor="start">Start Time</label>
                           <input type="time" placeholder="start time" name="start" autoComplete="off" onChange={(e) => setStartTime(e.target.value)}/>
                        </li>
                        <li>
                           <label htmlFor="destination">Destination</label>
                           <input type="text" placeholder="destination" name="destination" autoComplete="off" onChange={(e) => setDestination(e.target.value)}/>
                        </li>
                        <li>
                           <label htmlFor="arrival">Arrival Time</label>
                           <input type="time" placeholder="arrival time" name="arrival" autoComplete="off" onChange={(e) => setArrivalTime(e.target.value)}/>
                        </li>
                        <li>
                           <label htmlFor="price">Price</label>
                           <input type="text" placeholder="price" name="price" autoComplete="off" onChange={(e) => setPrice(e.target.value)}/>
                        </li>
                        <li>
                           <label htmlFor="quantity">Count In Stock</label>
                           <input type="text" placeholder="quantity" name="quantity" autoComplete="off" onChange={(e) => setQty(e.target.value)}/>
                        </li>
                        <li>
                        <button type="submit" className="primary">Create New Product</button>
                        </li>
                     </ul>
                  </form>
                  <form>
                        <ul className="form-add-right">   
                           <li><h2>Type Train Form</h2></li>
                           <li>
                              {loadingType ? <div>loading</div>: errorType ?<div>{error}</div>:<div style={{position:'absolute',top:'3.8rem',color:'#1BC47D',fontSize:'1rem',left:'0.2rem',padding:'.3rem .10rem'}}>{typeData}</div>}
                           </li>
                           <li>
                              <label htmlFor="arrival">Name</label>
                              <input type="text" placeholder="name" name="name" autoComplete="off" onChange={(e) => setName(e.target.value)}/>
                           </li>
                           <li>
                              <button type="submit" className="primary" onClick={createNewTrainData}>Create New Product</button>
                              {showModal ? <Message show={showModal} onHide={() => setShowModal(false)} close={handleClose}/>: null }
                           </li>
                        </ul>
                  </form>
            </div>
         </div>
       );     
   }
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
  
 
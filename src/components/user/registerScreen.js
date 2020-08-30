import React, {useEffect,useState} from "react";
import {useSelector,useDispatch} from "react-redux";
import {register} from "../../_actions/userAction"
import { Link } from "react-router-dom";
function RegisterScreen(props){
  const[name,setName]=useState('');
  const[username,setUsername]=useState('');
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[gender,setGender]=useState('male');
  const[phone,setPhone]=useState('');
  const[address,setAddress]=useState('');
  const userRegister = useSelector(state => state.userRegister);
  const {loading,error,userInfo} = userRegister;
  const dispatch = useDispatch();
  const redirect = props.location.search? props.location.search.split("=")[1]:"/";
  useEffect( () =>{
     if(userInfo){
        props.history.push(redirect)
     }
  },[userInfo])
  const submitHandler = e => {
    e.preventDefault();
      dispatch(register(name,username,email,password,gender,phone,address))
  }
  return (
    <div className="form">
        <form onSubmit={submitHandler}>
              <ul className="form-container">
                 <li><h2>Register Form</h2></li>
                 <li></li>
                 <li>
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder="Name" name="name" autoComplete="off" onChange={(e) => setName(e.target.value)}/>
                 </li>
                 <li>
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder="username" name="username" autoComplete="off" onChange={(e) => setUsername(e.target.value)}/>
                 </li>
                 <li>
                    <label htmlFor="email">E-mail</label>
                    <input type="text" placeholder="email" name="email" autoComplete="off" onChange={(e) => setEmail(e.target.value)}/>
                 </li>
                 <li>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="password" name="password" autoComplete="off" onChange={(e) => setPassword(e.target.value)}/>
                 </li>
                 <li>
                    <label htmlFor="gender">Gender</label>
                    <select type="text"  name="gender" autoComplete="off" onChange={(e) => setGender(e.target.value)}>
                      <option value="male">male</option>
                      <option value="female">female</option>
                    </select>
                 </li>
                 <li>
                    <label htmlFor="phone">Phone</label>
                    <input type="text" placeholder="phone" name="phone" autoComplete="off" onChange={(e) => setPhone(e.target.value)}/>
                 </li>
                 <li>
                    <label htmlFor="address">Address</label>
                    <input type="text" placeholder="address" name="address" autoComplete="off" onChange={(e) => setAddress(e.target.value)}/>
                 </li>
                 <li>
                  <button type="submit" className="primary">Registration</button>
                 </li>
                 <li>
                    <div>Already Have An Account ?? </div>
                 </li>
                 <li>
                   <Link to={
                       redirect === "/" ?
                       "/signin" : "signin?redirect="+redirect}className="main-btn">Sign in</Link>
                 </li>
              </ul>
        </form>
    </div>
  );
             
           
}

export default RegisterScreen
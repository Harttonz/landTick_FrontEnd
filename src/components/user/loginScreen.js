import React, {useEffect,useState} from "react";
import {useSelector,useDispatch} from "react-redux";
import { signin } from "../../_actions/userAction";
import { Link } from "react-router-dom";
function LoginScreen(props){
   const[username,setUsername]=useState('');
   const[password,setPassword]=useState('');
   const userSignIn = useSelector(state => state.userSignin);
   const{isLoading,error,userInfo} = userSignIn;
   const dispatch = useDispatch();
   const redirect = props.location.search? props.location.search.split("=")[1]:"/";
   useEffect( () =>{
    if(userInfo &&  !userInfo.isAdmin){
      props.history.push(redirect)
    }else if(userInfo &&  userInfo.isAdmin){
      props.history.push('/listOrder')
    }
    return () =>{
    }
  },[userInfo])
  const submitHandler =  e => {
      e.preventDefault();
      dispatch(signin(username,password))
  };
    return (
        <div className="form">
          <form onSubmit={submitHandler}>
            <ul className="form-container">
                <li><h2>Welcome.</h2></li>
                <li>
                    {isLoading && <div>Loading...</div>}
                    {error && <div style={{color:'#ff0000'}}>{error}</div>}
                </li>
                <li>
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder="username" name="username" id="username" autoComplete="off" onChange={ (e)=>setUsername(e.target.value)}/>
                </li>
                <li>
                   <label htmlFor="password">Password</label>
                   <input type="password" placeholder="Password" name="password" id="password" autoComplete="off" onChange={(e) =>setPassword(e.target.value)}/>
                </li>
                <li>
                    <button className="button primary" type="submit">Login</button>
                </li>
                <li>
                  New to Landtick ???
                </li>
                <li>
                   <Link to={redirect === "/" ? "register" : "register?redirect="+redirect} className="main-btn">Create Your Landtick Account</Link>  
                </li>
            </ul>
         
              <div></div>
          </form>
        </div>
    );
}
export default LoginScreen;
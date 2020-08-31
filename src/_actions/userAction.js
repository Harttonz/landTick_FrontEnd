import Axios from "axios";
import Cookie from "js-cookie";
import {USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL, USER_LOGOUT, UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS, UPDATE_USER_FAIL, LOGIN_FACEBOOK_REQUEST, LOGIN_FACEBOOK_SUCCESS} from "../constants/userConstants";

const signin = (username,password) => async(dispatch) =>{
  dispatch({type:USER_SIGNIN_REQUEST,payload:{username,password}});
  try{
    const {data} = await Axios.post('/api/v1/signin',{username,password});
    dispatch({type:USER_SIGNIN_SUCCESS,payload:data});
    Cookie.set('userInfo',JSON.stringify(data));
  }catch(error){
    dispatch({type:USER_SIGNIN_FAIL,payload:error.response.data.message});
  }
}
const register = (name,username,email,password,gender,phone,address) => async(dispatch) =>{
   dispatch({type:USER_REGISTER_REQUEST,payload:{name,username,email,password,gender,phone,address}});
   try{
     const{data} = await Axios.post('/api/v1/register',{name,username,email,password,gender,phone,address});
     dispatch({type:USER_REGISTER_SUCCESS,payload:data});
     Cookie.set('userInfo',JSON.stringify(data));
   }catch(error){
     dispatch({type:USER_REGISTER_FAIL,payload:error.message})
   }
}
const update = (id,data) => async(dispatch,getState) =>{
  dispatch({type:UPDATE_USER_REQUEST,payload:{data}});
  try{
    const{userSignin:{userInfo}} = getState();
    const{data:{message}} = await Axios.patch( `/api/v1/user/${id}`,data,{
      headers:{
        Authorization:`${userInfo.token}`
      }
    });
    dispatch({type:UPDATE_USER_SUCCESS,payload:message});
    Cookie.set('userInfo',JSON.stringify(data));
  }catch(error){
    dispatch({type:UPDATE_USER_FAIL,payload:error.message})
  }
}
const logout = () => async(dispatch) =>{
  Cookie.remove("userInfo");
  dispatch({type:USER_LOGOUT})
}
export{signin,register,update,logout}
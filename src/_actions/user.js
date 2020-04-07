import axios from "axios";
import { BaseUrl, headerAuthorization } from "../config/headerToken";
export const signIn = user => {
  return {
    type: "SIGN_IN",
    payload: axios({
      method: "POST",
      url: `${BaseUrl}/login`,
      data: user
    })
  };
};
export const register = user => {
  return {
    type: "REGISTER",
    payload: axios({
      method: "POST",
      url: `${BaseUrl}/register`,
      data: user
    })
  };
};

export const userlogout = () =>{
  return {
    type :"USER_LOGOUT",
    payload:null
  };
};
export const checkloginAction = (token) =>{
  return {
    type: "CHECKLOGIN",
    payload: axios({
      method: "GET",
      url: `${BaseUrl}/checklogin`,
      headers:{
        Authorization: `Bearer ${token}`
      },
    })
  };
}
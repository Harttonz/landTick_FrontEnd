import {
  SIGNUP,
  SIGNIN
} from "../config/constant";

import axios from "axios";

export const login = user =>{
 return {
   type: SIGNUP,
   payload: axios({
     method: "POST",
     url: "http://localhost:4000/api/v1/register",
     data:user
    })
 };
};

export const signInA = user =>{
    return {
      type: SIGNIN,
      payload: axios({
        method: "POST",
        url: "http://localhost:4000/api/v1/login",
        data:user
      })
    };
}
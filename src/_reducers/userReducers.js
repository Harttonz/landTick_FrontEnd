import { USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL, UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS, UPDATE_USER_FAIL } from "../constants/userConstants";
function userSigninReducer(state = {}, action){
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return{isLoading:true}
    case USER_SIGNIN_SUCCESS:
      return {isLoading:false,userInfo:action.payload};   
    case USER_SIGNIN_FAIL:
      return{isLoading:false,error:action.payload}
    default: return state;
  }
};
function userRegisterReducer(state = {}, action){
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return {isLoading:true}
    case USER_REGISTER_SUCCESS:
      return {isLoading:false,userInfo:action.payload};
    case USER_REGISTER_FAIL:
      return {isLoading:false,error:action.payload}
    default:return state;
  }
};
function userUpdateReducer(state = {updateMessage:[]}, action){
  switch (action.type) {
    case UPDATE_USER_REQUEST:
      return {isLoading:true}
    case UPDATE_USER_SUCCESS:
      return {isLoading:false,updateMessage:action.payload};
    case UPDATE_USER_FAIL:
      return {isLoading:false,error:action.payload}
    default:return state;
  }
};
export{userSigninReducer,userRegisterReducer,userUpdateReducer}
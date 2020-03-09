// import {SIGNIN,SIGNUP} from "../config/constant"
const initialState =  {
    data :[],
    isloading:false,
    error:false
}
// export const userSignUp = (state = initialState,action) =>{
// switch (action.type) {
//   case `${SIGNUP}_PENDING`:
//     return {
//       ...state,
//       isloading: true,
//       islogin: true
//     };
//   case `${SIGNUP}_FULLFILLED`:
//     return {
//       ...state,
//       isloading: false,
//       islogin: false
//     };
//   case `${SIGNUP}_REJECTED`:
//     return {
//       ...state,
//       isloading: false,
//       error: true
//     };
//   default:
//     return state;
// }
// }
 const loginR = (state = initialState, action) => {
  switch (action.type) {
    case `SIGNIN_PENDING`:
      console.log("pending state position"); 
      return {
        ...state,
        isloading: true
      };
    case `SIGNIN_FULLFILLED`:
      console.log("fulfilled state position");
      window.localStorage.setItem("token",action.payload.data.token);
      return {
        ...state,
        isloading: false,
        data: action.payload.data,
        error:false
      };
    case `SIGNIN_REJECTED`:
       console.log("rejected state position");
      return {
        ...state,
        isloading: false,
        error: true
      };
    default:
      return state;
  }
};
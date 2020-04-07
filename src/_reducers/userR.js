const initialState = {
  dataUser:[],
  dataLogin:[],
  isLoading: false,
  dataError:[],
  error:false
};
// sign in reducer
export const signIn = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_IN_PENDING":
      return {
        ...state,
        isLoading: true
      };
    case "SIGN_IN_FULFILLED":
      return {
        ...state,
        dataUser: action.payload.data,
        isLoading: false
      };
    case "SIGN_IN_REJECTED":
      return {
        ...state,
        dataError: action.payload.response.data,
        isLoading:true,
        error:true
      };
    default:
      return state;
  }
};
// sign up reducer
export const register = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_PENDING":
      return {
        ...state,
        isLoading: true
      };
    case "REGISTER_FULFILLED":
      return {
        ...state,
        dataUser: action.payload.data,
        isLoading: false
      };
    case "REGISTER_REJECTED":
      return {
        ...state,
        isLoading: false,
        error: true
      };
    default:
      return state;
  }
};

export const checkLogin = (state = initialState, action) => {
  switch (action.type) {
    case "CHECKLOGIN_PENDING":
      return {
        ...state,
        isLoading: true
      };
    case "CHECKLOGIN_FULFILLED":
      return {
        ...state,
         dataLogin:action.payload.data.data,
        isLoading: false
      };
    case "CHECKLOGIN_REJECTED":
      return {
        ...state,
        isLoading: false,
        error: true
      };
    default:
      return state;
  }
};

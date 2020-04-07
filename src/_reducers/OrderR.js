const initialState = {
  orders: [],
  Order:[],
  isLoading: false,
  error: false
};
const orderR = (state= initialState,action) =>{
  switch (action.type) {
    case "GET_ALL_ORDER_PENDING":
      return {
        ...state,
        isLoading: true
      };  
      case "GET_ALL_ORDER_FULFILLED":
      return {
        ...state,
        orders: action.payload.data,
        isLoading: false
      };
    case "GET_ALL_ORDER_REJECTED":
      return {
        ...state,
        isLoading: false,
        error: true
      };
    
    // reducer for ordering ticket by user
    case "POST_ORDER_PENDING":
      return {
        ...state,
        isLoading: true
      };
    case "POST_ORDER_FULFILLED":
      console.log("asas", action.payload);
      return {
        ...state,
        addOrder: action.payload,
        isLoading: false
      };
    case "POST_ORDER_REJECTED":
      return {
        ...state,
        addOrder: action.payload,
        isError: true
      };

    default:
      return state;
  }
};
export default orderR;
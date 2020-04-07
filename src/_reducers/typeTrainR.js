const initialState = {
  type: [],
  isLoading: false,
  error: false
};

 const typeTrainR = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TYPE_PENDING":
      return {
        ...state,
        isLoading: true
      };
    case "GET_TYPE_FULFILLED":
      return {
        ...state,
        type: action.payload.data,
        isLoading: false
      };
    case "GET_TYPE_REJECTED":
      return {
        ...state,
        isLoading: false,
        error: true
      };
    default:
      return state;
  }
};
export default typeTrainR; 
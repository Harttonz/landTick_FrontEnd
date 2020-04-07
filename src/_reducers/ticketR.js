const initialState = {
  ticketData: [],
  ticketToday :[],
  isLoading: false,
  error: false
};
const ticketR = (state = initialState, action) => {
  // add new ticket
  switch (action.type) {
    case "ADD_TICKET_PENDING":
      console.log("ADD_TICKET_PENDING");
      return {
        ...state,
        isLoading: true
      };
    case "ADD_TICKET_FULFILLED":
      console.log("ADD_TICKET_FULFILLED");
      return {
        ...state,
        ticketData: action.payload.data,
        isLoading: false
      };
    case "ADD_TICKET_REJECTED":
      return {
        ...state,
        isLoading: false,
        error: true
      };

    // get ticket based on today
    case "GET_TICKETS_TODAY_PENDING":
      return {
        ...state,
        isLoading: true
      };
    case "GET_TICKETS_TODAY_FULFILLED":
      return {
        ...state,
        isLoading: false,
        ticketToday: action.payload.data
      };
    case "GET_TICKETS_TODAY_REJECTED":
      return {
        ...state,
        isLoading: false,
        error: true
      };
    // searching ticket 
    case "GET_TICKETS_SEARCH_PENDING":
      return {
        ...state,
        isLoading: true
      };
    case "GET_TICKETS_SEARCH_FULFILLED":
      return {
        ...state,
        isLoading: false,
        loginStatus: true,
        ticketToday: action.payload.data
      };
    case "GET_TICKETS_SEARCH_REJECTED":
      return {
        ...state,
        isLoading: false,
        error: true
      };
    default:
      return state;
  }
};
export default ticketR;
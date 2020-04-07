// const initialState = {
//   allticket: [],
//   isLoading: false,
//   error: false
// };
//  const allTicketR = (state = initialState, action) => {
//          switch (action.type) {
//            case "GET_ALL_TICKET_PENDING":
//              return {
//                ...state,
//                isLoading: true
//              };
//            case "GET_ALL_TICKET_FULFILLED":
//              return {
//                ...state,
//                allticket: action.payload.data,
//                isLoading: false
//              };
//            case "GET_ALL_TICKET_REJECTED":
//              return {
//                ...state,
//                isLoading: false,
//                error: true
//              };
//            default:
//              return state;
//          }
//        };

// export default allTicketR;

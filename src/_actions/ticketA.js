import axios from "axios";
import { BaseUrl, headerAuthorization } from "../config/headerToken";
export const addticketAction = ticket => {
  return {
    type: "ADD_TICKET",
    payload: axios({
      method: "POST",
      url: `${BaseUrl}/addticket`,
      data:ticket
    })
  };
};
export const getTicketsToday = dateNow => {
  return {
    type: "GET_TICKETS_TODAY",
    payload: axios({
      method: "GET",
      url: `${BaseUrl}/tickets?start_time=${dateNow}`
    })
  };
};
export const getTicketsSearch = data => {
  return {
    type: "GET_TICKETS_SEARCH",
    payload: axios({
      method: "GET",
      url: `${BaseUrl}/tickets`,
      params: data
    })
  };
};

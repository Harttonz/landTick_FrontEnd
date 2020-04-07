 import axios from "axios";
 import { BaseUrl, headerAuthorization } from "../config/headerToken";

// Get all data orders
export const DataAdmin = () => {
  return {
    type: "GET_ALL_ORDER",
    payload: axios({
      method: "GET",
      url: `${BaseUrl}/orders`,
      headers: headerAuthorization
    })
  };
};
//  order ticket by user
export const createOrder = DataOrder => {
  return {
    type: "POST_ORDER",
    payload: axios({
      method: "POST",
      url: `${BaseUrl}/order`,
      headers: headerAuthorization,
      data: DataOrder
    })
  };
};

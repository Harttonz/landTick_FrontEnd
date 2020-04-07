import {combineReducers,createStore,applyMiddleware} from "redux";
import{promise,logger} from "./middleware";
import { signIn, register,checkLogin} from "../_reducers/userR";
import allTicketR  from "../_reducers/traindataR";
import typeTrainR from "../_reducers/typeTrainR";
import orderR from "../_reducers/OrderR";
import ticketR from "../_reducers/ticketR";


const rootReducers = combineReducers({
  signIn,
  register,
  checkLogin,
  orderR,
  ticketR,
  typeTrainR
});

const store = createStore(rootReducers,applyMiddleware(promise,logger));
export default store;
import {combineReducers,createStore,applyMiddleware} from "redux";
import{logger,promise} from "./middleware";
import {userSignIn} from "../_reducers/user";
const rootReducers = combineReducers({
    userSignIn
})

const store = createStore(rootReducers,applyMiddleware(promise,logger));
export default store;
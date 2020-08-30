import {combineReducers,createStore,applyMiddleware,compose} from "redux";
import Cookie from "js-cookie";
import thunk from "redux-thunk";
import {listProductReducer,detailProductReducer, typeTrainReducer, listTypeTrainReducer, productReducer} from "../_reducers/productReducer";
import {userSigninReducer,userRegisterReducer, userUpdateReducer} from "../_reducers/userReducers";
import {cartReducer} from "../_reducers/cartReducer"
import {createOrderReducer, listOrderReducer, deleteOrderReducer, updateOrderReducer,listMyOrderReducer, saveUploadReducer} from "../_reducers/OrderReducer";
const cartItems = Cookie.getJSON("cartItems") || [];
const userInfo = Cookie.getJSON("userInfo") || null;
const initialState = {userSignin:{userInfo},cart:{cartItems}}
const rootReducers = combineReducers({
   userSignin:userSigninReducer,
   userRegister:userRegisterReducer,
   userUpdate:userUpdateReducer,
   productList:listProductReducer,
   productDetails:detailProductReducer,
   type:typeTrainReducer,
   listType:listTypeTrainReducer,
   cart:cartReducer,
   product:productReducer,
   order:createOrderReducer,
   listOrder:listOrderReducer,
   myOrder:listMyOrderReducer,
   onDelete:deleteOrderReducer,
   onUpdate:updateOrderReducer,
   onSaveUpload:saveUploadReducer
});
const composeEnhancer = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose)
const store = createStore(rootReducers,initialState,composeEnhancer(applyMiddleware(thunk)));
export default store;
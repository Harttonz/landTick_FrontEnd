import axios from "axios";
import Cookie from "js-cookie";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";
const addToCart = (productId,qty) => async (dispatch,getState) =>{
    try{
        const {data} = await axios.get('/api/v1/product/'+productId);
        dispatch({type:CART_ADD_ITEM,payload:{
            product:data[0].id,
            name:data[0].name,
            type:data[0].train['name'],
            startDate:data[0].start_date,
            startTime:data[0].start_time,
            arrivalTime:data[0].arrival_time,
            destination:data[0].destination,
            startStation:data[0].start_station,   
            price:data[0].price,
            qty
        }})
        const{cart:{cartItems}} = getState();
        Cookie.set("cartItems",JSON.stringify(cartItems))
    }catch(error){

    }
}
const removeCart = (productId) => (dispatch,getState) =>{
    dispatch({type:CART_REMOVE_ITEM,payload:productId})
    const{cart:{cartItems}} = getState();
    Cookie.set("cartItems",JSON.stringify(cartItems));
}
export {addToCart,removeCart}
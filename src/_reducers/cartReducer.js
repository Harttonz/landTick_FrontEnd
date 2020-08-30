import {CART_ADD_ITEM, CART_REMOVE_ITEM} from "../constants/cartConstants";
function cartReducer(state={cartItems:[]},action){
    switch(action.type){
        case CART_ADD_ITEM:
            const item = action.payload;
            console.log('isi item',item)
            // find product id on cartItem based on new item that has same id
            const product = state.cartItems.find( x => x.product === item.product);
            // check then mapping
            if(product){
                return{
                    cartItems:state.cartItems.map( x => x.product === product.product? item:x)
                }
            }
            // spread all items
            return { cartItems:[...state.cartItems,item]}
        case CART_REMOVE_ITEM :
            return{cartItems:state.cartItems.filter( x => x.product !== action.payload)}
        default : return state;
    }
}
export {cartReducer};
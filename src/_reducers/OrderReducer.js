import {CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, CREATE_ORDER_FAIL, LIST_ORDER_REQUEST, LIST_ORDER_SUCCESS, LIST_ORDER_FAIL, DELETE_ORDER_REQUEST, DELETE_ORDER_SUCCESS, DELETE_ORDER_FAIL, UPDATE_ORDER_REQUEST, UPDATE_ORDER_SUCCESS, UPDATE_ORDER_FAIL, LIST_MY_ORDER_REQUEST, LIST_MY_ORDER_SUCCESS, LIST_MY_ORDER_FAIL, GET_MY_ORDER_SUCCESS, GET_MY_ORDER_REQUEST, GET_MY_ORDER_FAIL, SAVE_UPLOAD_REQUEST, SAVE_UPLOAD_SUCCESS, SAVE_UPLOAD_FAIL} from "../constants/orderConstants";
function createOrderReducer(state={order:[]},action){
    switch(action.type){
        case CREATE_ORDER_REQUEST:
            return{
                loading:true
            }
        case CREATE_ORDER_SUCCESS:
            return{
                order:action.payload,
                loading:false
            }
        case CREATE_ORDER_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        default :
            return state
    }
}
function listOrderReducer(state={orders:[]},action){
    switch(action.type){
        case LIST_ORDER_REQUEST:
            return{
                loading:true
            }
        case LIST_ORDER_SUCCESS:
            return{
                orders:action.payload,
                loading:false
            }
        case LIST_ORDER_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        default :
            return state
    }
}
function deleteOrderReducer(state={onDeleteData:[]},action){
    switch(action.type){
        case DELETE_ORDER_REQUEST:
            return{
                loading:true
            }
        case DELETE_ORDER_SUCCESS:
            return{
                onDeleteData:action.payload,
                loading:false
            }
        case DELETE_ORDER_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        default :
            return state
    }
}
function updateOrderReducer(state={onUpdateData:[]},action){
    switch(action.type){
        case UPDATE_ORDER_REQUEST:
            return{
                loading:true
            }
        case UPDATE_ORDER_SUCCESS:
            return{
                onUpdateData:action.payload,
                loading:false
            }
        case UPDATE_ORDER_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        default :
            return state
    }
}
function listMyOrderReducer(state={orders:[]},action){
    switch(action.type){
        case LIST_MY_ORDER_REQUEST:
            return{
                loading:true
            }
        case LIST_MY_ORDER_SUCCESS:
            return{
                orders:action.payload,
                loading:false
            }
        case LIST_MY_ORDER_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        default :
            return state
    }
}
function saveUploadReducer(state={orders:{}},action){
    switch(action.type){
        case SAVE_UPLOAD_REQUEST:
            return{
                loading:true
            }
        case SAVE_UPLOAD_SUCCESS:
            return{
                orders:action.payload,
                loading:false
            }
        case SAVE_UPLOAD_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        default :
            return state
    }
}
export {createOrderReducer,listOrderReducer,deleteOrderReducer,updateOrderReducer,listMyOrderReducer,saveUploadReducer}
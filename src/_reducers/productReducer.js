import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL, TYPE_TRAIN_REQUEST, TYPE_TRAIN_SUCCESS, TYPE_TRAIN_FAIL, TYPE_TRAIN_LIST_REQUEST, TYPE_TRAIN_LIST_SUCCESS, TYPE_TRAIN_LIST_FAIL, ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_FAIL} from "../constants/productConstants";
function listProductReducer(state={products:[]},action){
    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            return{
                loading:true
            }
        case PRODUCT_LIST_SUCCESS:
            return{
                loading:false,
                products:action.payload
            }
        case PRODUCT_LIST_SUCCESS:
            return{
                loading:false,
                error:action.payload
            }
        default : return state;
    }
}
function detailProductReducer(state={product:[]},action){
    switch(action.type){
        case PRODUCT_DETAILS_REQUEST:
            return{
                loading:true,
            }
        case PRODUCT_DETAILS_SUCCESS:
            return{
                loading:false,
                product:action.payload
            }
        case PRODUCT_DETAILS_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        default : return state;

    }
}
function typeTrainReducer(state={typeData:[]},action){
    switch(action.type){
        case TYPE_TRAIN_REQUEST:
            return{
                loading:true
            }
        case TYPE_TRAIN_SUCCESS:
            return{
                typeData:action.payload,
                loading:false
            }
        case TYPE_TRAIN_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        default :
            return state
    }
}
function listTypeTrainReducer(state={products:[]},action){
    switch(action.type){
        case TYPE_TRAIN_LIST_REQUEST:
            return{
                loading:true
            }
        case TYPE_TRAIN_LIST_SUCCESS:
            return{
                products:action.payload,
                loading:false
            }
        case TYPE_TRAIN_LIST_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        default :
            return state
    }
}
function productReducer(state={products:[]},action){
    switch(action.type){
        case ADD_PRODUCT_REQUEST:
            return{
                loading:true
            }
        case ADD_PRODUCT_SUCCESS:
            return{
                products:action.payload,
                loading:false
            }
        case ADD_PRODUCT_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        default :
            return state
    }
}
export {listProductReducer,detailProductReducer,typeTrainReducer,listTypeTrainReducer,productReducer}
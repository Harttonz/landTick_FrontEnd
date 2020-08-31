import axios from "axios";
import {PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL, TYPE_TRAIN_REQUEST, TYPE_TRAIN_SUCCESS, TYPE_TRAIN_FAIL, TYPE_TRAIN_LIST_REQUEST, TYPE_TRAIN_LIST_SUCCESS, TYPE_TRAIN_LIST_FAIL, ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_FAIL, SEARCH_PRODUCT_REQUEST, SEARCH_PRODUCT_SUCCESS, SEARCH_PRODUCT_FAIL} from "../constants/productConstants";
const listProduct = (params) => async (dispatch) =>{ 
    try{
        dispatch({type:PRODUCT_LIST_REQUEST});
        const {data} = await axios.get(`/api/v1/products`,{
            params:params
        });
        dispatch({type:PRODUCT_LIST_SUCCESS,payload:data});
    }catch(error){
        dispatch({type:PRODUCT_LIST_FAIL,payload:error.response.data.message});
    }
}
const detailProduct = (id) => async (dispatch) =>{
    try{
        dispatch({type:PRODUCT_DETAILS_REQUEST});
        const {data} = await axios.get('/api/v1/product/'+id);
        dispatch({type:PRODUCT_DETAILS_SUCCESS,payload:data}); 
    }catch(error){
        dispatch({type:PRODUCT_DETAILS_FAIL,payload:error.message});
    }
}
const createTypeTrain = (name) => async (dispatch,getState) =>{
    try{
        dispatch({type:TYPE_TRAIN_REQUEST,payload:{name}});
        const{userSignin:{userInfo}} = getState();
        const {data:{message}} = await axios.post('/api/v1/newtype',{name},{
            headers:{
                Authorization:`${userInfo.token}`
            }
        });
        dispatch({type:TYPE_TRAIN_SUCCESS,payload:message})
    }catch(error){
        dispatch({type:TYPE_TRAIN_FAIL,payload:error.message})
    }
}
const listTypeTrain = () => async (dispatch,getState) =>{
    try{
        dispatch({type:TYPE_TRAIN_LIST_REQUEST});
        const{userSignin:{userInfo}} = getState();
        const {data} = await axios.get('/api/v1/newtype',{
            headers:{
                Authorization:`${userInfo.token}`
            }
        });
        dispatch({type:TYPE_TRAIN_LIST_SUCCESS,payload:data})
    }catch(error){
        dispatch({type:TYPE_TRAIN_LIST_FAIL,payload:error.message})
    }
}
const addProduct = (newData) => async (dispatch,getState) =>{
    try{
        dispatch({type:ADD_PRODUCT_REQUEST});
        const{userSignin:{userInfo}} = getState();
        const {data:{message}} = await axios.post('/api/v1/products',newData,{
            headers:{
                Authorization:`${userInfo.token}`
            }
        });
        dispatch({type:ADD_PRODUCT_SUCCESS,payload:message})
    }catch(error){
        dispatch({type:ADD_PRODUCT_FAIL,payload:error.message})
    }
}
export {listProduct,detailProduct,createTypeTrain,listTypeTrain,addProduct}
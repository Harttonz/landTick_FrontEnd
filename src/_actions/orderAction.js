import axios from "axios";
import {CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, CREATE_ORDER_FAIL, LIST_ORDER_REQUEST, LIST_ORDER_SUCCESS, LIST_ORDER_FAIL, DELETE_ORDER_REQUEST, DELETE_ORDER_SUCCESS, DELETE_ORDER_FAIL, UPDATE_ORDER_REQUEST, UPDATE_ORDER_SUCCESS, UPDATE_ORDER_FAIL, LIST_MY_ORDER_REQUEST, LIST_MY_ORDER_SUCCESS, LIST_MY_ORDER_FAIL, SAVE_UPLOAD_REQUEST, SAVE_UPLOAD_SUCCESS, SAVE_UPLOAD_FAIL} from "../constants/orderConstants";
const createOrder = (order) => async(dispatch,getState) =>{
    try{
        dispatch({type:CREATE_ORDER_REQUEST});
        const{userSignin:{userInfo}} = getState();
        const {data} = await axios.post('/api/v1/order',order,{
            headers:{
                Authorization:`${userInfo.token}`
            }
        });
        dispatch({type:CREATE_ORDER_SUCCESS,payload:data});
    }catch(error){
        dispatch({type:CREATE_ORDER_FAIL,payload:error.message})
    }

}


const getListOrder = () => async(dispatch,getState) =>{
    try{
        dispatch({type:LIST_ORDER_REQUEST});
        const{userSignin:{userInfo}} = getState();
        const {data} = await axios.get('/api/v1/orders',{
            headers:{
                Authorization:`${userInfo.token}`
            }
        });
        dispatch({type:LIST_ORDER_SUCCESS,payload:data})
    }catch(error){
        dispatch({type:LIST_ORDER_FAIL,payload:error.message})
    }
}


const deleteOrder = (id) => async(dispatch,getState) =>{
    try{
        dispatch({type:DELETE_ORDER_REQUEST});
        const{userSignin:{userInfo}} = getState();
        const {data:{message}} = await axios.delete(`/api/v1/order/${id}`,{
            headers:{
                Authorization:`${userInfo.token}`
            }
        });
        dispatch({type:DELETE_ORDER_SUCCESS,payload:message})
    }catch(error){
        dispatch({type:DELETE_ORDER_FAIL,payload:error.message})
    } 
}


const updateOrder = (id,data) => async(dispatch,getState) =>{
    try{
        dispatch({type:UPDATE_ORDER_REQUEST});
        const{userSignin:{userInfo}} = getState();
        const {data:{message}} = await axios.patch(`/api/v1/order/${id}`,data,{
            headers:{
                Authorization:`${userInfo.token}`
            }
        })
        dispatch({type:UPDATE_ORDER_SUCCESS,payload:message});
    }catch(error){
        dispatch({type:UPDATE_ORDER_FAIL,payload:error.message});
    }
}


const listmyOrder = (params) => async(dispatch,getState) =>{
    try{
        dispatch({type:LIST_MY_ORDER_REQUEST});
        const{userSignin:{userInfo}} = getState();
        const {data} = await axios.get(`/api/v1/order`,{
            headers:{
                Authorization:`${userInfo.token}`
            },
            params:params
        })
        dispatch({type:LIST_MY_ORDER_SUCCESS,payload:data});
    }catch(error){
        dispatch({type:LIST_MY_ORDER_FAIL,payload:error.message});
    }
}


const saveUpload = (id,data) => async(dispatch,getState) =>{
    try{
        dispatch({type:SAVE_UPLOAD_REQUEST,payload:data});
        const{userSignin:{userInfo}} = getState();
        const {data:{message}} = await axios.patch(`/api/v1/upload/${id}`,data,{
            headers:{
                Authorization:`${userInfo.token}`
            }
        })
        dispatch({type:SAVE_UPLOAD_SUCCESS,payload:message});
    }catch(error){
        dispatch({type:SAVE_UPLOAD_FAIL,payload:error.message});
    }
}

export {createOrder,getListOrder,deleteOrder,updateOrder,listmyOrder,saveUpload}
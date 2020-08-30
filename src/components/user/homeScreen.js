import React,{useEffect} from 'react'
import {listProduct} from "../../_actions/productAction";
import {GetIDR,intervalTime} from "../functional/utilities";
import {useSelector,useDispatch} from "react-redux";
import { Link } from 'react-router-dom';

function HomeScreen(props) {
    const productList = useSelector(state => state.productList);
    const {loading,error,products} = productList;
    const date = new Date();
    const DateNow = `${date.getFullYear()}-${("0" +(date.getMonth() + 1)).slice(-2)}-${("0" + date.getDate()).slice(-2)}`
    const dispatch = useDispatch();
    const qty = props.handleAmountQty();
    const params = {
        start_date:DateNow
    }
    useEffect(
        () =>{
            dispatch(listProduct(params));     
        },
    [])
    return (
        <div className="product-container">
            <ul className="listProduct">
                <li>The Train's Name</li>
                <li>Departure</li>
                <li>Arrival</li>
                <li>Duration</li>
                <li>Price /person </li>
            </ul>
            {loading ? <div className="center-state-loading">loading..</div>:error ? <div className="center-state-loading">{error}</div>:  
            products.length > 0 ? products.map( product =>
            <div key={product.id}>
                <Link to={"/product/"+product.id+`?qty=${qty}`}>
                <ul className="listData"  id="listData">
                    <li>
                        <div>{product.name}</div>
                        <div>{product.train.name}</div> 
                    </li>
                    <li>
                        <div>{product.start_time}</div>
                        <div>{product.start_station}</div>
                    </li>
                    <li>
                        <div>{product.arrival_time}</div>
                        <div>{product.destination}</div>
                    </li>
                    <li>
                        <div>{intervalTime(product.arrival_time,product.start_time)}</div>
                    </li>
                    <li>
                        <div>{GetIDR(product.price)}</div>
                    </li>
                </ul>
                </Link>
            </div>
            ): <div style={{textAlign:'center',fontSize:'2rem'}}>No Data Display</div>}
        </div>       
    )
}

export default HomeScreen

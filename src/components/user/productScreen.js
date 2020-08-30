import React,{useEffect,useState}  from "react";
import "./product.css";
import {GetIDR,getDayName} from "../functional/utilities";
import {useSelector,useDispatch} from "react-redux";
import {detailProduct} from "../../_actions/productAction";
import {addToCart} from "../../_actions/cartAction";
function ProductScreen (props){
  const productDetail = useSelector( state => state.productDetails);
  const qty = props.location.search? props.location.search.split("=")[1]:0;
  const dispatch = useDispatch();
  const {product,loading,error} = productDetail;
  const[newqty,setNewQty]=useState(1);

  const handleAddToCart = () =>{
    props.history.push('/signin?redirect=cart');
    dispatch(addToCart(props.match.params.id,newqty))
  }
    
  useEffect(() => {
    dispatch(detailProduct(props.match.params.id)) 
    },[])

      return (
        <>
        { loading ? (<div>loading..</div>) : error ? (<div>{error}</div>) :( 
         product.map( product => 
         <div className="details" key={product.id}>
          <div className="details-info">
              <ul>
                  <li>
                    <div><h3>Detail Product</h3></div>
                    <div>{getDayName(product.start_date)}</div>
                  </li>
                  <li>
                     <div>
                        <div><h4>{product.name}</h4></div>
                        <div>{product.train.name}</div>
                     </div>
                     <div>
                        <div>Status : {product.qty > 1 ? "In Stock": "Unavailabe"}</div>
                     </div>
                  </li>
                  <li>
                    <div>
                      <div>From</div>
                    <div>{product.start_station}</div>
                    </div>
                    <div>
                      <div>Destination</div>
                      <div>{product.destination}</div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div>Start Time</div>
                      <div>{product.start_time}</div>
                    </div>
                    <div>
                      <div>Arrival Date</div>
                      <div>{product.arrival_time}</div>
                    </div>
                 </li>
              </ul>
          </div>
          <div className="details-action">
                <ul>
                  <li>
                    <div>Price</div>
                    <div>{GetIDR(product.price)}</div>
                  </li>
                  <li>
                  <div>Qty : <span>{newqty}</span></div>
                    <div>
                      <select value={newqty} onChange={(e) => setNewQty(e.target.value)} disabled={product.qty < 2 }>
                          { [...Array(product.qty).keys()].map( x => (
                              <option key={x+1} value={x+1}>{x+1}</option>
                          ))}       
                      </select>
                    </div>
                  </li>
                  <li>
                    <button type="submit" className="full-width" onClick={handleAddToCart} disabled={product.qty < 2 }>BUY</button>
                  </li>
                </ul>
          </div>
        </div>
        )
        )}
        </>
      );
  }
export default ProductScreen;
import React, {useEffect, useState} from "react";
import "./dashboard.css";
import Banner from "./bannerScreen";
import UserProduct from "./homeScreen";
import { useSelector,useDispatch} from "react-redux";
import { listProduct } from '../../_actions/productAction';

export default function Dashboard(props){
  const userSignin = useSelector( state => state.userSignin);
  const {userInfo} = userSignin;
  const dispatch = useDispatch();
  const[adultQty,setAdultQty]=useState(0);
  const[babyQty,setBabyQty]=useState(0);
  const[start_station,setStart_station]=useState('');
  const[destination,setDestination]=useState('');
  const[startDate,setStartDate]=useState('');
  const[endDate,setEndDate]=useState('');
  const MaxAdultQty = () => {
      setAdultQty(adultQty+1)
  }
  const MinAdultQty = () =>{
    if(adultQty > 0){
      setAdultQty(adultQty-1);
    }
  }
  const MaxBabyQty = () => {
    setBabyQty(babyQty+1)
  }
  const MinBabyQty = () =>{
    if(babyQty > 0){
      setBabyQty(babyQty-1);
    }
  }
  const handleAmountQty = () =>{
    const qty = babyQty + adultQty;
    return qty
  }
  const reverseStation = () =>{
    let from = start_station;
    let dest = destination;
    setStart_station(dest);
    setDestination(from)
  }
  const search = () =>{
      const params = {
        date_gte:startDate,
        date_lte:endDate,
        start_station:start_station,
        destination:destination
      }
      console.log('data',params)
      dispatch(listProduct(params))
  }
   useEffect(()=>{
     handleAmountQty()
     if(userInfo && userInfo.isAdmin){
       props.history.push('/listOrder')
     }
   },[userInfo])
     return (
        <div> 
            <Banner/>
            <div className="searchBox">
                  <div className="left-searchBox">
                    <div>    
                        <img src={require("../../asset/train.png")}/>
                        <div>The Train's ticket</div>
                    </div>
                  </div>
                  <ul className="right-searchBox">
                          <li><h1>The Train</h1></li>
                          <li>
                            <div>
                                <div>From</div>
                                <input type="text" placeholder="jakarta" value={start_station} onChange={(e)=>setStart_station(e.target.value)}/>
                            </div> 
                            <div>
                                <img src={require("../../asset/rounded.png")} onClick={reverseStation}/>
                            </div>                         
                            <div>
                              <div>Destination</div>
                              <input type="text" placeholder="surabaya" value={destination} onChange={(e)=>setDestination(e.target.value)}/>
                            </div>
                          </li>
                          <li>
                              <div>
                                <div>Departure Date</div>
                                <div>
                                  <input type="checkbox"/> Round Trip
                                </div>
                              </div>
                              <div>
                                <div>Adult</div>
                                <div>Baby</div>
                              </div>  
                          </li>
                          <li>
                                <div>
                                    <div>
                                    <input  type="date" name="firstDate" onChange={ (e) => setStartDate(e.target.value)}/>
                                    </div>
                                    - 
                                    <div>
                                    <input  type="date"  name="secondDate" onChange={ (e) => setEndDate(e.target.value)}/>
                                    </div>
                                </div>
                                <div>
                                      <div>
                                          <button onClick={MinAdultQty}>-</button>
                                          <div>{adultQty}</div>
                                          <button onClick={MaxAdultQty}>+</button> 
                                      </div>
                                      <div>
                                          <button onClick={MinBabyQty}>- </button>
                                          <div>{babyQty}</div>
                                          <button onClick={MaxBabyQty}>+</button>                               
                                      </div>
                                      <div>
                                        <button type="submit" onClick={search} className="button primary">
                                          Search Ticket
                                          </button>
                                      </div>  
                                </div>
                          </li>
                      </ul>      
              </div>   
             <UserProduct handleAmountQty={handleAmountQty}/>
       </div>
     );
 }
 

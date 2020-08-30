import React,{useEffect} from "react";
import {BrowserRouter,Route,Link} from "react-router-dom";
import {logout} from "./_actions/userAction";
import Dashboard from "./components/user/Dashboard";
import CardScreen from "./components/user/cardScreen";
import profileScreen from "./components/user/profileScreen";
import MyTicket from "./components/user/cardTicketScreen";
import Payment from "./components/user/paymentScreen";
import AddProduct from "./components/admin/addProductScreen"
import ListOrder from "./components/admin/listOrderScreen";
import ProductScreen from './components/user/productScreen';
import Register from "./components/user/registerScreen";
import Login from './components/user/loginScreen';
import { useSelector,useDispatch } from 'react-redux';
function App(props){
  const userSignin = useSelector( state => state.userSignin);
  const {userInfo} = userSignin;
  const dispatch = useDispatch();
  const handleClose = () =>{
    dispatch(logout())
    window.location.reload();
  }
   return(
    <BrowserRouter>
    <div className="grid-container">
        <header className="header" >
          <div className="brand">
            <Link to={userInfo && userInfo.isAdmin ? "/listOrder" : "/"}><img src={require('./asset/brand.png')}></img></Link> 
          </div>
          <div className="header-menu">
          {userInfo === null ?
          <div>
           <Link to={'/register'} className="main-btn">Register</Link>
           <Link to={'/signin'} className="main-btn">Login</Link>
          </div>:
           userInfo && !userInfo.isAdmin ?
          (<div className="dropdown-container">
              <button className="dropbtn">{userInfo.name}</button>
              <div className="dropdown">
                  <Link to="/profile">
                    <img src={userInfo.picture}></img>
                  </Link>
                  <div className="dropdown-content">
                      <div>
                        <img src={require('./asset/ticket.png')}/>
                        <Link to="/myticket">My Ticket</Link >
                      </div>
                      <div>
                          <img src={require('./asset/payment.png')}/>
                          <Link to="/payment">Payment</Link > 
                      </div>
                      <div>
                          <img src={require('./asset/logout.png')}/>
                          <button onClick={handleClose}>Logout</button > 
                      </div>
                    </div>
              </div>  
            </div>)
             : null
             }
          {userInfo && userInfo.isAdmin &&(
          <div className="dropdown-container">
              <button className="dropbtn">Admin</button>
              <div className="dropdown">
                <Link to="/profile">
                <img src={userInfo.picture}></img>
                </Link>
                <div className="dropdown-content">
                    <div>
                       <img src={require('./asset/ticket.png')}/>
                       <Link to="/addticket">Add New Product</Link >
                    </div>
                    <div>
                        <img src={require('./asset/logout.png')}/>
                        <button onClick={handleClose}>Logout</button >  
                    </div>  
                </div>
              </div>
          </div>) 
          }
          </div>
        </header>
        <main className="main">
        <Route path="/"  exact component={Dashboard} />
        <Route path="/signin" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/product/:id" component={ProductScreen} />
        <Route path="/cart/:id?" component={CardScreen} />
        <Route path="/myticket" component={MyTicket} />
        <Route path="/profile" component={profileScreen} />
        <Route path ="/listOrder" component ={ListOrder}/>
        <Route path="/payment" component={Payment}/>
        <Route path="/addticket" component={AddProduct} />
        </main>
    </div>
    </BrowserRouter>
  ); 
} 
export default App;
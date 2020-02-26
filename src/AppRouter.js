import React,{Component} from "react";
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Beranda from "./components/beranda";
import ModalLogin from "./components/modalLogin";
import Profile from "./components/profile";
import Dashboard from "./components/Dashboard";
import Addpet from "./components/Addpet";
import EditProfile from "./components/editProfile";
import Payment from "./components/payment";

const AppRouter =()=>(
    <BrowserRouter>
    <Switch>
        <Route path="/" exact component = {Beranda}/>
        <Route path="/login" component={ModalLogin}/>
        <Route path="/dashboard" component={Dashboard}/>   
        <Route path="/addpet" component={Addpet}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/editprofil"component={EditProfile}/>
        <Route path="/payment" component={Payment}/>
    </Switch>
     </BrowserRouter>
); 
export default AppRouter;
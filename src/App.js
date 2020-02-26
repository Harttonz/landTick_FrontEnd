import React, { Component } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Beranda from './components/beranda';
import Profile from './components/profile';
import Dashboard from './components/Dashboard';
import EditProfile from './components/editProfile'; 
import Addpet from "./components/Addpet";
import Payment from './components/payment';


class App extends Component {
  render() {
    return (
      // <Router>
      //   <Switch>
      //     <Route path="/beranda">
      //       <Beranda />
      //     </Route>
      //     <Route path="/profile">
      //       <Profile />
      //     </Route>
      //     <Route path="/dashboard">
      //       <Dashboard />
      //     </Route>
      //     <Route path="/editprofile">
      //       <Editprofile />
      //     </Route>
      //     <Route path="/addpet">
      //       <Addpet />
      //     </Route>
    //  <Route path="/payment">
    //         <Payment />
    //       </Route> 
      //   </Switch>
      // </Router>
    <Addpet/>
    );
  }
}

export default App;

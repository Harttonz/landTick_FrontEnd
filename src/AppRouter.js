import React from "react";
import {BrowserRouter,Route,Switch} from "react-router-dom";
import User from "./components/user/userIndex";
import Dashboard from "./components/user/Dashboard";
import Myticket from "./components/user/myTicket";
import MyticketApproved from"./components/user/myticket_approved";
import Payment from "./components/user/payment";
import Detailticket from "./components/user/detailTicket";
import Admin from "./components/admin/indexAdmin";
import Addticket from "./components/admin/addticket"
import HomeAdmin from"./components/admin/homeAdmin";
const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/"  exact component={User} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/myticket" component={Myticket} />
      <Route path="/myticketApproved" component={MyticketApproved} />
      <Route path="/payment" component={Payment} />
      <Route path="/detailticket" component={Detailticket} />
      {/* router fo admin UI */}
      <Route path ="/admin" component = {HomeAdmin}/>
      <Route path="/listTransaction" component={Admin} />
      <Route path="/addticket" component={Addticket} />
    </Switch>
  </BrowserRouter>
); 
export default AppRouter;
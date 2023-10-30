import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
// import MainSec from "./MainSec";
import {
  Switch,
  Route,
} from "react-router-dom";
import "./assets/Dashboard.scss";
import ViewProducts from "./ViewProducts";
import MainSec from "./MainSec";

function Dashboard() {
  const [tab, setTab] = useState(0)

  const setActiveTab = (numb) =>{
      setTab(numb)
  }
  return (
    <div className="Dashboard">
      <Navbar />
      <hr />
      <div className="dashboard__pages">
        <Sidebar func={setActiveTab} activeTab={tab} />
        <Switch>
          <Route path="/dashboard/product/:productID" >
            <ViewProducts />
          </Route>
          <Route path="/dashboard/shoppingCart" >
            <ViewProducts />
          </Route>
          <Route exact path={`/dashboard/`} >
          <ActiveTab tab={tab} />
          </Route>
        </Switch>

        
      </div>
    </div>
  );
}

const ActiveTab = ({tab}) =>{
    if(tab === 0){
      return <MainSec />
    } else if(tab === 1){
      return "comming soon"
    }
}

export default Dashboard;

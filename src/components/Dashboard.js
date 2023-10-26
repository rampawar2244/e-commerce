import React, { useEffect, useState, lazy, Suspense } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
// import MainSec from "./MainSec";
import {
  Switch,
  Route,
} from "react-router-dom";
import "./assets/Dashboard.scss";
import ViewProducts from "./ViewProducts";
const MarkdownPreview = lazy(() => import('./MainSec'))

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
          <Route path="/dashboard/viewproduct/:id/:category/:title/:image/:price/:description/:rating" >
            <ViewProducts />
          </Route>
          <Route exact path={`/dashboard/`} >
          <ActiveTab tab={tab} />
          </Route>
        </Switch>

        {/* <Suspense fallback={<p>Loading...</p>} >
        
        </Suspense> */}
      </div>
    </div>
  );
}

const ActiveTab = ({tab}) =>{
    if(tab === 0){
      return <MarkdownPreview />
    } else if(tab === 1){
      return "comming soon"
    }
}

export default Dashboard;

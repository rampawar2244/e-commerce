import React, { useEffect, useState, lazy, Suspense } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
// import MainSec from "./MainSec";

import "./assets/Dashboard.scss";
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
        <Suspense fallback={<p>Loading...</p>} >
        <ActiveTab tab={tab} />
        </Suspense>
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

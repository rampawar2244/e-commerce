import React, { useEffect, useState, lazy, Suspense } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
// import MainSec from "./MainSec";

import "./assets/Dashboard.scss";
const MarkdownPreview = lazy(() => import('./MainSec'))

function Dashboard() {
  return (
    <div className="Dashboard">
      <Navbar />
      <hr />
      <div className="dashboard__pages">
        <Sidebar />
        <Suspense fallback={<p>Loading...</p>} >
        <MarkdownPreview />
        </Suspense>
      </div>
    </div>
  );
}

export default Dashboard;

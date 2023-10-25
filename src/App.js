import axios from "axios";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import ProductList from "./components/reduxStore/ProductList";
import Cart from "./components/reduxStore/Cart";
function App() {

  return (
    // <Router>
    //   <Switch>
      <Dashboard />
      // <Route path="/product" element={ProductList}></Route>
    //   </Switch>  
    // </Router>
  );
}
export default App;

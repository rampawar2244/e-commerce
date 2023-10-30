import axios from "axios";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ViewProducts from "./components/ViewProducts";
// import ViewProducts from "./components/ViewProducts";

function App() {

  return (
    <Router>
      <Switch>
      <Route exact path="/dashboard/*" component={Dashboard}></Route>
   
      {/* <Route path="/dashboard/:id" component={ViewProducts}></Route> */}
      
      </Switch>  
    </Router>
  );
}
export default App;

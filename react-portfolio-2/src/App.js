import React from "react";
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import {} from 'react-bootstrap'; 
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../pages/Home"; 
import About from "./pages/About"; 
import Project from "./pages/Project";

const App = () => {
  return (
    <Router>
    <div>
     
   
 <Link to="/">Home</Link> 
 <Link to="/about">About</Link>
 <Link to="/project">Project</Link>
</div> 

<Switch>
<Route path="/" exact>
 <Home/>

</Route>
<Route path="/about" exact>
 <About/>
</Route> 

<Route path="/project" exact>
 <Project/>
</Route>

</Switch>
 </Router>
  );
};

export default App



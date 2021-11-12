import React from "react";
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Container} from 'react-bootstrap'; 
import {BrowserRouter as Router, Switch, Route, Link, } from "react-router-dom";
import Home from "./pages/Home"; 
import About from "./pages/About"; 
import Project from "./pages/Project";   
import './Footer' 
import Footer from './Footer'

 


const App = () => {
  return (
    <Router>
<Container>
  <Nav className="justify-content-center">  
    <div>
     
<Nav.Item>
 <Link to="/">Home</Link> 
 </Nav.Item>
 <Nav.Item>
 <Link to="/about">About</Link>
 </Nav.Item>
 <Nav.Item>
 <Link to="/project">Project</Link> 
 </Nav.Item> 


 <Footer/>
</div> 
</Nav>
</Container>


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



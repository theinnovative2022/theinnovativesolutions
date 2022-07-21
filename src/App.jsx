import React from "react";
import Home from './Home'
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Navbar from "./Navbar";
import Career from "./Career";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { BrowserRouter as Router, Route, Link, NavLink, Routes } from "react-router-dom";
import { Switch } from "@material-ui/core";

const App = () =>{ 


  return(
   <> 
   <Navbar/>
     
   <Routes>

      <Route exact path="/" element={<Home/>} />
      <Route exact path="/About" element={<About/>} />
      <Route exact path="/Career" element={<Career/>} />
      <Route exact path="/Contact" element={<Contact/> }/>
      <Route exact path="/Services" element={<Services/>}/>
      <Route path="*" element={<Home/>}/>
      
   </Routes> 
    {/*<About/>
    <Contact/>*/}
   </>
  );
}

export default App;

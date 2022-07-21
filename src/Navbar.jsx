import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../src/images/LOGO JPG.jpg';
 
const Navbar = () =>{

    return(
        <>
        <div className="container-fluid nav_bg sticky-top">
            <div className="row">
                <div className="col-12 mx-auto">
                  <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  <div className="container-fluid">
                   <img id="img" src={logo} width='240px' height='100px'/> 
                  . <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                       <li className="nav-item">
                       <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                       </li>
                       <li className="nav-item">
                       <NavLink className="nav-link" aria-current="page" to="/About">About</NavLink>
                       </li>
                       <li className="nav-item">
                       <NavLink className="nav-link" aria-current="page" to="/Career">Careers</NavLink>
                       </li>
                       <li className="nav-item">
                       <NavLink className="nav-link" aria-current="page" to="/Services">Services</NavLink>
                       </li>
                       <li className="nav-item">
                       <NavLink className="nav-link " aria-current="page" to="/Contact">Contact</NavLink>
                       </li>
                     </ul>
                   </div>
               </div>
              </nav>
          </div>
        </div>
    </div>
      </>
    ); }
export default Navbar;

import React from "react";
import { NavLink } from "react-router-dom";
 import web from '../src/images/the.jpg';
 import {FaMailBulk,FaPhone,FaAddressBook,  FaFacebookSquare, FaInstagramSquare, FaTwitterSquare,FaLinkedin} from 'react-icons/fa';


const Home =() =>{
  return( 
  <>
  <section id="header" className="d-flex align-items-center bg-light">
  <div className="container-fluid nav_bg ">
    <div className="row">
        <div className="col-10 mx-auto">
            <div className="row">
            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                 <h1><strong className="brand-name"> Web Development</strong>  & Digital Marketing Agency </h1>
                 <h2 className="my-3">
                    Grow Your business with us
                 </h2>
                 <div className="mt-3">
                    <NavLink to="/Services" className="btn btn-outline-info">Get Started</NavLink >
                 </div>
            </div>
              <div className="col-lg-6 order-1 order-lg-2 header-img">
                <img src={web} className="img-fluid animated"  />
              </div>
            </div>
        </div>
    </div>
  </div>
  
  </section>


  <section>
  <div className="footer bg-dark"><br />
    <div className="list0">
      <h5 className="ml-3 text-white">Quick links</h5>
      <NavLink to='/About' className="text-white ml-3">About</NavLink><br />
      <NavLink to='/Services' className="text-white ml-3">Our Services</NavLink><br />
      <NavLink to='/Contact' className="text-white ml-3">Contact Us</NavLink><br />
    </div>

    <div  className=" career_div">
      <h5>Career</h5>
        <NavLink to="/Career" className="text-white">Job</NavLink><br />
        <NavLink to="/Career" className="text-white" >Internship</NavLink>
    </div>
    <div className="social">
      <h5>Follow Us</h5>
        <a className="facebook" href=""><FaFacebookSquare/> </a>
        <a className="instagram" href="https://www.instagram.com/the.innovative.solutions/" target="_blank"><FaInstagramSquare/> </a>
        <a className="twitter" href="https://twitter.com/theinnosolution" target="_blank"><FaTwitterSquare/> </a>
        <a className="linkdin" target="_blank" href="https://www.linkedin.com/in/the-innovative-solutions-18255222a/" ><FaLinkedin/> </a><br />
    </div>
      <FaAddressBook id="aicon"/>
      <FaPhone id="picon"/>
      <FaMailBulk id="micon"/>
    <div className="mail">
      <h5 className="text-white">Contact Us</h5>
       <a>Urvashi Apartment, Bhavik nagar, vidya
        <br /> vikas circle, Nashik-422005</a>
        <p>+91-9371001138</p>
      <a className="text-white " target="_blank" href="mail to: theinnovative.solutions20@gmail.com">theinnovative.solutions20@gmail.com</a>
    </div>
    <div className="googlemap">
    <iframe class="gmap_iframe" width="400px" height="180px" src="https://maps.google.com/maps?width=300&amp;height=262&amp;hl=en&amp;q=The innovative solutions, urvashi&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
    </div>
  </div>
  <div className="bg-info p-1">
    <p className="text-center text-white">@copiright</p>
  </div>
  </section>
  </>  
)}

export default Home;

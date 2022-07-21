import React from "react";
import img from '../src/images/abo.gif'
import vision from '../src/images/vision.png';
import mision from '../src/images/mission.png';


const About =() =>{
  return( 
  <>
  <img src={img} width='500px' height='500px' alt="" className="d-flex flex-column about_img "/>
  <div className="text bg-light">
      <h1 id="us">ABOUT COMPANY</h1>
        <p>The Innovative  Solutions IT Services was founded by Raviraj Baste in 2020 with a vision of adding value to developing the organizations by delivering innovative ideas. Our core business is designing and building custom applications to help businesses succeed and grow.</p>
        <p>  The company works with moral values like business ethics, principles, strategies, timely deliverables, innovative thinking, zeal, enthusiasm, motivating our team members, and making leaders.</p> 
        <p>We add real value to clients' business growth through our solutions due to domain expertise and technical expertise. We go that extra mile to fulfill their needs by doing a proper study analysis and providing an optimum solution within the client budget. With the help of our process-based delivery model and customer-centric approach, we can provide the best enterprise solutions to our satisfied customers.</p>
        <p>We are a leading provider of information technology, consulting, and business process services.</p>
  </div>
 
  <div className="visiondiv">
      
        <img className="vision_img" src={vision} height="150px" width="250px" />
        <img className="mision_img" src={mision} height="150px" width="250px" />
        
  </div>

  <div className="visionp">
    <h3>OUR VISION</h3>
    <p>We work for our client's business growth and provide them low-cost and best sustainable innovative solutions. Also, we help them with fast decision-making. 
 v     All this makes us exceptional because we think from the customer's point of view and not from our point of view.</p>
  </div>

  <div className="misionp">
    <h3>OUR MISSION</h3>
    <p>
    We are dedicated to serving technology challenges convert artistic concepts into tangible worth by providing distinctive, innovative solutions and reliable package solutions for alone business growth.
    We aim to develop citizen-centric problem-solving solutions to improve the quality of life in the city. We are committed to developing solutions to support our clients and help decision making, operation management, business growth.
    </p>
  </div>
  
  <div class="nilesh">
  
   </div>

   
  </>  
)}

export default About;

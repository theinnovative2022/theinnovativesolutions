import React from "react";
import web from '../src/images/web.jpeg'
import android from '../src/images/android.jpg'
import software from '../src/images/software.jpg'
import cyber from '../src/images/cyber.jpg'
import digital from '../src/images/digital.jpg'
import intern from '../src/images/consultancy.jpg'

const Services = () =>{
    return(
    <>
    <h1 className="my-5 text-center text-capitalize"> OUR SERVICES</h1>
    <div className="container service_main">
        <div className="row">

        <div className="col-sm">
          <div className="card" >
           <img src={web} height="165px" className="card-img-top ml-0 mt-0" alt="..."/>
           <div className="card-body">
           <h5 className="card-title">Web Development</h5>
           <p className="card-text">Our company offers low cost programming and design services .</p>
           <a href="#" className="btn btn-outline-info">Read More</a>
           </div>
          </div>
          </div>


         <div className="col-sm">
         <div class="card">
         <img src={android} height="165px" className="card-img-top  ml-0 mt-0" alt="..."/>
         <div className="card-body">
         <h5 className="card-title">Android Development</h5>
         <p className="card-text">Business applications are the backbone of every business .</p>
         <a href="#" className="btn btn-outline-info">Read More</a>
         </div>
        </div>
        </div>


        <div className="col-sm"><div className="card">
        <img src={software} height="165px" className="card-img-top  ml-0 mt-0" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">Software Developement</h5>
        <p className="card-text">If you are searching for expert software developers.</p>
        <a href="#" className="btn btn-outline-info">Read More</a>
        </div>
        </div>
        </div>
        </div>
    </div>


    <div className="container service_second">
        <div className="row">
        <div className="col-sm mt-5">
          <div className="card" >
           <img src={cyber} height="165px" className="card-img-top ml-0 mt-0" alt="..."/>
           <div className="card-body">
           <h5 className="card-title">Cyber security Training</h5>
           <p className="card-text">Our company provides cyber security training and consultancy. </p>
           <a href="#" className="btn btn-outline-info">Read More</a>
           </div>
          </div>
          </div>


         <div className="col-sm mt-5">
         <div class="card">
         <img src={digital} height="165px" className="card-img-top  ml-0 mt-0" alt="..."/>
         <div className="card-body">
         <h5 className="card-title"> Digital Marketing</h5>
         <p className="card-text">We are provided Digital Marketing Service.</p>
         <a href="#" className="btn btn-outline-info">Read More</a>
         </div>
        </div>
        </div>


        <div className="col-sm mt-5"><div className="card">
        <img src={intern} height="165px" className="card-img-top  ml-0 mt-0" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">Business Consultancy</h5>
        <p className="card-text">We are provided business consultancy services.</p>
        <a href="#" className="btn btn-outline-info">Read More</a>
        </div>
        </div>
        </div>
        </div>
    </div>
  </>
    
    
)}

export default Services;
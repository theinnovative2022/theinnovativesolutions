import React from "react";
import img from '../src/images/team2.jpeg'
import apply from '../src/images/apply_now.jpg'
import white from '../src/images/white.jpg'
import apply2 from '../src/images/apply2.jpg'



const Career =()=>{
    return(
    <>
    <div className="bg-light">
           <img className="ml-0 mt-0 mr-0" src={img} height="474px" width="100%" alt="" />
           <h2 className="join" style={{marginTop: '-70px'}}>Join With us</h2>
    </div>

    <div className="bg-light">
            <h2 className="mt-0 ml-3 mb-0">For Job Opportunity</h2>
            <img className="ml-5" src={apply} width="460px" height="200px" alt="" />
    </div>
       <div className="start">
       <img src={white} width="360px" height="180px" />
          <div className="container">
            <h3>APPLY</h3>
            <p>Build up relevant skill sets and be a part of new projects that will play an essential role in the industry.</p>
            <a target="_blank" href="https://forms.gle/WB82s4fU6WzUqgTn6" className="btn btn-outline-info">Apply Now</a>
        </div>
    </div>


    <div className="bg-light">
        <h2 className="ml-3">For Internship Opportunity</h2>
        <img className="ml-5" src={apply2} width="460px" height="200px" alt="" />
    </div>
    <div className="start">
       <img src={white} width="360px" height="180px" />
        <div className="container">
            <h3>APPLY</h3>
            <p>Build up relevant skill sets and be a part of new projects that will play an essential role in the industry.</p>
            <a target="_blank" href="https://forms.gle/WB82s4fU6WzUqgTn6" className="btn btn-outline-info">Apply Now</a>
        </div>
    </div>
    
    
    </>
    )

    
}

export default Career;
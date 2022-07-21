import React from "react";

const Contact =() =>{


  return (
    <>
    <form action="connection.php" method="POST">
    <div className="my-5">
    <h1 className="text-center mb-5 mt-5">CONTACT US</h1>
    <div className="container contact_div">
      <div className="row">
        <div className="col-md-6 col-10 mx-auto">
          <form>

          <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
           Full Name
          </label>
          <input 
          type="text" 
          className="form-control" 
          id="exampleFormControlInput1" 
          name="fullname"
          placeholder="Enter your full name"
          />
          </div>

          <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
          Contact Number
          </label>
          <input 
          type="number" 
          className="form-control" 
          id="exampleFormControlInput1" 
          name="contactnumber"
          placeholder="Enter your contact number"/>
          </div>

          <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
          </label>
          <input 
          type="email" 
          className="form-control" 
          id="exampleFormControlInput1" 
          name="emailid"
          placeholder="Enter email address"/>
          </div>


          <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Message
          </label>
          <textarea 
          className="form-control" 
          id="exampleFormControlTextarea1"
          name="msg"
          rows="3"></textarea>
          </div>
          <button type="submit" className="btn btn-outline-info">Submit</button>
          </form>
          </div>
        
      </div>
      
    </div>
    </div>
    </form>
    </>
  )
}

export default Contact;


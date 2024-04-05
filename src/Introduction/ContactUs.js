import React from 'react'

function ContactUs() {
  return (
    <>
    <div className='d-flex flex-column w-70 p-4 space-y-2'>
    <div className="mb-3">
    <label for="exampleFormControlInput1" className="form-label">Email address</label>
    <input type="email" className="form-control w-100" id="exampleFormControlInput1" placeholder="name@example.com"/>
  </div>
  <div className="mb-3">
    <label for="exampleFormControlTextarea1" className="form-label">Enter Your Message</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    <button className='btn btn-primary my-3'>Send Message</button>
  </div>
 
  </div>
  

  </>
  )
}

export default ContactUs

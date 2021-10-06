import React from 'react'
import './ContactUs.css'

function ContactUs() {
    return (
      <div className="containe">
      <div className="row">
        <h1 className="h1_1">contact us</h1>
      </div>
     
      <div className="row input-container">
        <div className="col-xs-12">
          <div className="styled-input wide">
            <input className="input" type="text" required />
            <label>Name</label> 
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="styled-input">
            <input className="input" type="text" required />
            <label>Email</label> 
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="styled-input" style={{float: 'right'}}>
            <input className="input" type="text" required />
            <label>Phone Number</label> 
          </div>
        </div>
        <div className="col-xs-12">
          <div className="styled-input wide">
            <textarea required defaultValue={""} />
            <label>Message</label>
          </div>
        </div>
        <div className="col-xs-12">
          <div className="btn-lrg submit-btn">Send Message</div>
        </div>
      </div>
    </div>
    )
}

export default ContactUs

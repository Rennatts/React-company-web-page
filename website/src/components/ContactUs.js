import React from 'react';
import './ContactUs.css';
import cargo from './../images/cargo.jpg';


function ContactUs() {
    return (
        <div className="contactus_main_container">
            <div className="contactus_title">
               <h2>Send Message</h2>
            </div>

            <div className="contactus_container">
                <div className="contactus_container_secondary">
                    <div className="form_contactus">
                        <input type="text" placeholder="name"></input>
                        <input type="text" placeholder="Email"></input>
                        <textarea placeholder="Message"></textarea>
                        <btn className="contactus_btn">SEND</btn>
                    </div> 
                </div>

                <div className="contactus_container_secondary">
                    <div className="photo_container">
                        <img src={cargo} alt="cargo"></img>
                    </div> 
                </div>  
            </div>
        </div>
    )
}

export default ContactUs

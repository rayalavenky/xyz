import React from "react";
import contactbg from '../Assets/contact/contactbg3.jpg'
import Partner from "./contact/Partner";
import Career from "./contact/Career";
import ContactFooter from "./contact/ContactFooter";

const Contact = () => {
  return (
    <div>
      <img src={contactbg} alt="" className="contact_bg"/>
      <h1 className="contact_head">Contact Us</h1>
      <div className="pt-5">
        <Partner/>
      </div>
      <div>
        <Career/>
      </div>
      <div>
        <ContactFooter/>
      </div>
    </div>
  );
};

export default Contact;

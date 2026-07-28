import React from 'react';
import Navbar from "../utilityComponents/commonUtilities/nonRespNavbar";
import Footer from "../utilityComponents/commonUtilities/footer";
import ContactUsDescription from "../utilityComponents/contactUsUtilities/contactUsDescription";

// import NewNavbar from '../utilityComponents/commonUtilities/newNavbar';
// <NewNavbar />


export default function contact() {
  return (
    <div>
      <Navbar />
      <ContactUsDescription />
      <Footer />
    </div>
  )
}

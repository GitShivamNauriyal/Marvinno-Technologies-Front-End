import React from "react";
import Navbar from "../utilityComponents/commonUtilities/nonRespNavbar";
import Footer from "../utilityComponents/commonUtilities/footer";
import AboutDescription from "../utilityComponents/aboutUtilities/aboutDescription";

export default function about() {
    return (
        <div>
            <Navbar />
            <AboutDescription />
            <Footer />
        </div>
    );
}

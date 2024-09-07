import React from "react";
import "../../css/aboutCss/OurRecognitions.css";

import msme_logo from "../../images/image/msme_logo.jpg";
import MII_logo from "../../images/image/MII_logo.jpg";
import SI_logo from "../../images/image/SI-logo.jpg";
import tbi_logo from "../../images/image/tbi_logo.jpg";

const OurRecognitions = () => {
    return (
        <div className="recognitions-master">
            <h1 className="about-section-headings">Our Recognitions</h1>
            <div className="recognitions-grid">
                <div className="recognitions-grid-item">
                    <div className="recognitions-grid-item-image">
                        <img src={msme_logo}></img>
                    </div>
                    <h4 className="recognitons-grid-item-heading">
                        We are <span> MSME </span> registered Start-up company
                    </h4>
                </div>
                <div className="recognitions-grid-item">
                    <div className="recognitions-grid-item-image">
                        <img src={MII_logo}></img>
                    </div>
                    <h4 className="recognitons-grid-item-heading">
                        We are completely{" "}
                        <span> Make in India & Made in India </span>
                    </h4>
                </div>
                <div className="recognitions-grid-item">
                    <div className="recognitions-grid-item-image">
                        <img src={SI_logo}></img>
                    </div>
                    <h4 className="recognitons-grid-item-heading">
                        We are <span>DPIIT certified </span> Start-up
                    </h4>
                </div>
                <div className="recognitions-grid-item">
                    <div className="recognitions-grid-item-image">
                        <img src={tbi_logo}></img>
                    </div>
                    <h4 className="recognitons-grid-item-heading">
                        We are Incubated at{" "}
                        <span> TBI - Graphic Era University, Dehradun</span>
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default OurRecognitions;

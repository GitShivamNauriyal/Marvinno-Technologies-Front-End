import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../css/homeCss/FeatureComponent.css"; // Ensure this path is correct

export default function FeatureComponent({ icon, heading, description }) {
    AOS.init({ duration: 1500 });

    return (
        <div className="featureMaster" data-aos="fade-up">
            <div className="feature">
                <div className="imageBGPadding">
                    <img
                        className="featuresImageCss"
                        src={icon}
                        alt={heading}
                    />
                </div>
                <p className="headingFeaturesCss">{heading}</p>
                <hr className="descriptionIconsLineSeperator" />
                <p className="descriptionFeaturesCss">{description}</p>
            </div>
        </div>
    );
}

import React from "react";
import "../../css/homeCss/description.css";

export default function featuresComponent(props) {
    return (
        <div>
            <div className="featuresDiv">
                <div className="imageBGPadding">
                    <img
                        className="featuresImageCss"
                        src={props.icon}
                        alt="icon"
                    />
                </div>
                <p className="headingFeaturesCss">{props.heading}</p>
                <hr className="descriptionIconsLineSeperator" />
                <p className="centerFeaturesText">
                    <p className="descriptionFeaturesCss">
                        {props.description}
                    </p>
                </p>
            </div>
        </div>
    );
}

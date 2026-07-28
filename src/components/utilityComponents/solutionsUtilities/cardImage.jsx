import React from "react";
import "../../css/solutionsCss/description.css";
import ReadMoreSolutions from "./ReadMoreSolutions";

export default function CardImage(props) {
    return (
        <div className="div-solutions-card">
            <div className="solutions-card-image-wrapper">
                <img className="img-solutions" src={props.img} alt={props.automation} />
                <span className="solutions-card-badge">{props.badge || "Smart Solution"}</span>
            </div>
            <div className="solutions-card-body">
                <h3 className="heading-solutions">{props.automation}</h3>
                <p className="description-solutions-intro">{props.description}</p>
                <ReadMoreSolutions text={props.readmore} />
            </div>
        </div>
    );
}
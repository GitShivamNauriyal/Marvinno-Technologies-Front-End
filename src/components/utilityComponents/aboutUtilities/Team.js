import React from "react";
import "../../css/aboutCss/aboutDescription.css";

export default function Team({ name, role }) {
    return (
        <div className="team-container">
            {/* <img className="team-img" src={img} alt="team person img" /> */}
            <p className="team-name">{name}</p>
            <p className="team-role">{role}</p>
            {/* <p className="team-exp">
                Experience - <span className="team-exp-bold">{exp}</span>
            </p> */}
        </div>
    );
}

import React, { useState } from "react";

export default function ReadMoreSolutions({ text }) {
    const [expanded, setExpanded] = useState(false);

    if (!text) return null;

    return (
        <div className="solutions-readmore-wrapper">
            {expanded && (
                <div className="solutions-expanded-content">
                    <p>{text}</p>
                </div>
            )}
            <button
                className="ReadMoreButton-solutions"
                onClick={() => setExpanded(!expanded)}
            >
                {expanded ? "Show Less ↑" : "Learn More ↓"}
            </button>
        </div>
    );
}
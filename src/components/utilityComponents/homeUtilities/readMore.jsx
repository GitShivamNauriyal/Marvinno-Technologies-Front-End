import React, { useState } from "react";

const ReadMore = ({ text }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div
            style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
            }}
        >
            {expanded && (
                <div className="centerReadMoreButton read-more-content">
                    <p>{text}</p>
                </div>
            )}
            <button
                onClick={() => setExpanded(!expanded)}
                className="ReadMoreButton"
            >
                {expanded ? "Show Less" : "Read More"}
            </button>
        </div>
    );
};

export default ReadMore;

// <div>
//     {isReadMoreShown ? text : text.substr(0, 10)}
//     <p className="centerReadMoreButton">
//         <button className="ReadMoreButton" onClick={toggleBtn}>
//             {isReadMoreShown ? "Less" : "More"}
//         </button>
//     </p>
// </div>

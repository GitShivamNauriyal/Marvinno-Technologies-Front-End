import { useState } from "react";
import React from "react";

export default function ReadMoreSolutions(props) {
  const [isReadMoreShown, setReadMoreShown] = useState(false);
  const text = props.text;
  
  const toggleBtn = () => {
    setReadMoreShown(prevState => !prevState);
  }
  
  return(
    <div>
      {isReadMoreShown ? text : text.substr(0,10)}
      <p className="centerReadMoreButton-solutions">
      <button className="ReadMoreButton-solutions" onClick={toggleBtn}>{isReadMoreShown ? "Less" : "More"}</button>
      </p>
      </div>
  )

}
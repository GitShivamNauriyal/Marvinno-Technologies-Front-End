import React from 'react';
import "../../css/solutionsCss/description.css";
import ReadMoreSolutions from './ReadMoreSolutions';

export default function cardImage(props) {
  return (
    <div>
      <div className="div-solutions">
        <h5 className="heading-solutions">{props.automation}</h5>
        <img className="img-solutions" src={props.img} alt="Card img cap"/>
            <p className="description-solutions">{props.description}<ReadMoreSolutions text={props.readmore} /></p>
      </div>
    </div>
    )
  }
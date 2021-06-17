import React from "react";

import '../assets/styles/PlanetsStyle.scss'
import imgMercury from "../assets/img/planet-mercury.svg"
import PlanetsAPI from "../hooks/PlanetsAPI";



const Mercury = () =>{
    const planets =  PlanetsAPI()
    
    // debugger
    console.log(planets);
    
    return (
      <div className="planet-overview">
        <div className="planet-container">
          <div className="planet-img-container">
            <img className="planet-img" src={imgMercury} alt="lol" />
          </div>
          <div className="planet-description">
            <div className="planet-description-container">
              <h1 className="planet-name">{planets.mercury?.name}</h1>
              <p className="planet-information">
                {planets.mercury?.overview.content}
              </p>
              <span className="planet-source">
                Source:
                <a href={planets.mercury?.overview.source} target="_blank">
                  Wikipedia
                </a>
              </span>
            </div>

            <div className="planet-buttons-info">
              <button type="button" className="btn-active">
                <span> 01 </span> overview
              </button>
              <button type="button">
                <span>02</span> internal structure
              </button>
              <button type="button">
                <span>03</span> surface geology
              </button>
            </div>
          </div>
        </div>
        <div className="planet-facts-container">
          <div className="planet-fact">
            <p>rotation time</p>
            <span>{planets.mercury?.rotation}</span>
          </div>
          <div className="planet-fact">
            <p>revolution time</p>
            <span>{planets.mercury?.revolution}</span>
          </div>
          <div className="planet-fact">
            <p>radius </p>
            <span>{planets.mercury?.radius}</span>
          </div>
          <div className="planet-fact">
            <p>average temp.</p>
            <span>{planets.mercury?.temperature}</span>
          </div>
        </div>
      </div>
    );}

export default Mercury
import React from "react";

//css
import "./card.css";

// main react component
function Card({ cardData }) {
  return (
    <>
      {cardData?.map((country, index) => {
        const { name, population, region, flag } = country;
        return (
          <a key={index} className="card-link" href="http://google.com">
            <div className="card">
              <div className="card-img">
                <img src={flag} alt="country" />
              </div>
              <div className="card-subtitle">
                <h5>{name}</h5>
                <p>
                  population: <span>{population}</span>
                </p>
                <p>region: {region}</p>
                <p>capital: beijing</p>
              </div>
            </div>
          </a>
        );
      })}
    </>
  );
}

export default Card;

import React, { useEffect, useState } from "react";
import Card from "../card/Card";

import axios from "axios";
import data from "../../data.json";

import "./index.css";
import { getValue } from "@testing-library/user-event/dist/utils";

const continents = ["asia", "africa", "america", "europe", "oceania"];

function CardContainer(props) {
  // transformed data
  const [cardData, setCardData] = useState([]);

  // handle input text state
  const [input, setInput] = useState("");

  //handle select state
  const [select, setSelect] = useState("");

  // handle filtered data
  const [filteredData, setFilteredData] = useState(null);

  // transform data
  const handleCardData = (data) => {
    const cards = data?.map((country) => {
      const key = Object.keys(country.name.nativeName)[0];

      //   if (country.currencies) {
      // console.log(Object.keys(country.currencies));
      // console.log(country.currencies);
      //   }

      return {
        name: country.name.common,
        population: country.population,
        region: country.region,
        flag: country.flags.svg,
        subRegion: country.subregion,
        nativeName: country.name.nativeName[key].official,
        // currencies: country.currencies.map((currency) => currency.name),
        // currencies: country.currencies.name,
        languages: Object.values(country.languages),
      };
    });

    setCardData(cards);

    // country.name.common
    // country.population
    // country.region
    // country.flags.svg
    //country.subregion
    // const key = Object.key(country.name.nativeName[0])
    // country.name.nativeName[key].official
    // currencies: country.currencies.map(currency => currency.name )
    // Object.values(country.languages)
  };

  useEffect(() => {
    // axios.get('')
    handleCardData(data);
  }, []);

  // handle input state
  const handleInputChange = (value) => {
    const filteredData = cardData
      .filter((country) => country.name.includes(value.toLowerCase()))
      .filter(
        (country) => country.region.toLowerCase() === select.toLowerCase()
      );

    setFilteredData(filteredData);
    setInput(value);
  };
  const handleSelectChange = (value) => {
    console.log(value);
    setSelect(value);
  };
  return (
    <>
      <input
        onChange={(e) => handleInputChange(e.target.value)}
        value={input}
        type="text"
        className=""
      />

      <select
        onChange={(e) => handleSelectChange(e.target.value)}
        name="countries"
        id="countries"
      >
        <option value={""}>select your region</option>;
        {continents.map((item, index) => {
          return (
            <option key={index} value={item}>
              {item.toUpperCase()}
            </option>
          );
        })}
      </select>

      <div className="card-container">
        <Card cardData={filteredData ? filteredData : cardData} />
      </div>
    </>
  );
}

export default CardContainer;

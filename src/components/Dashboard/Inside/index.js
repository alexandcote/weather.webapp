// @flow
import React from "react";

import "./styles.css";
import humidityIcon from "components/Dashboard/humidity.svg";
import temperatureIcon from "components/Dashboard/temperature.svg";

type Props = {
  temperature: number,
  humidity: number
};

const Inside = ({ temperature, humidity }: Props) => (
  <div className="Inside">
    <div className="Inside__box">
      <img
        className="Inside__box-icon"
        src={temperatureIcon}
        alt="Temperature"
      />
      <div className="Inside__box-content">
        <p className="Inside__box-content--label">Inside Temperature</p>
        <p className="Inside__box-content--value">{temperature} ℃</p>
      </div>
    </div>

    <div className="Inside__box">
      <img className="Inside__box-icon" src={humidityIcon} alt="Humidity" />
      <div className="Inside__box-content">
        <p className="Inside__box-content--label">Inside Humidity</p>
        <p className="Inside__box-content--value">{humidity} %</p>
      </div>
    </div>
  </div>
);

export default Inside;

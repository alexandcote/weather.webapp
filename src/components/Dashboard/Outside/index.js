// @flow
import React from "react";

import "./styles.css";
import humidityIcon from "components/Dashboard/humidity.svg";

type Props = {
  temperature: number,
  humidity: number,
  rain?: number,
  icon?: string
};

const displayIcon = function(icon) {
  if (icon) {
    return <i className="wu wu-black wu-256 wu-clear" />;
  }
};

const Outside = ({ temperature, humidity, rain, icon }: Props) => (
  <div className="Outside">
    <div className="Outside__top">
      <div className="Outside__icon">{displayIcon(icon)}</div>
      <div className="Outside__temperature">
        <p className="Outside__temperature--label">Outside Temperature</p>
        <p className="Outside__temperature--value">{temperature} ℃</p>
      </div>
    </div>

    <div className="Outside__bottom">
      <div className="Outside__humidity">
        <div className="Outside__icon">
          <img src={humidityIcon} alt="Humidity" />
        </div>
        <p className="Outside__humidity--label">Outside Humidity</p>
        <p className="Outside__humidity--value">{humidity} %</p>
      </div>

      <div className="Outside__rain">
        <div className="Outside__icon">
          <i className="wu wu-white wu-128 wu-chancesleet" />
        </div>
        <p className="Outside__rain--label">Rain Rate</p>
        <p className="Outside__rain--value">{rain} in</p>
      </div>
    </div>
  </div>
);

export default Outside;

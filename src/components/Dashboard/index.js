// @flow
import React, { Component } from "react";

import Tile from "components/Tile";

import { Station } from "types";
import { toCelsius } from "utils";

import "./styles.css";

type Props = {
  station: Station
};

class Dashboard extends Component<Props> {
  render() {
    return (
      <div className="Dashboard">
        <Tile>
          <h1>
            Inside Temperature:
            {toCelsius(this.props.station.current.inTemperature)}°C
          </h1>
        </Tile>
        <Tile>
          <h1>
            Outside Temperature:
            {toCelsius(this.props.station.current.outTemperature)}°C
          </h1>
        </Tile>
        <Tile>
          <h1>
            Inside Humidity:
            {this.props.station.current.inHumidity}
          </h1>
        </Tile>
        <Tile>
          <h1>
            Outside Humidity:
            {this.props.station.current.outHumidity}
          </h1>
        </Tile>
        <Tile>
          <h1>
            Rain Rate:
            {this.props.station.current.rainRate}
          </h1>
        </Tile>
        <Tile>
          <h1>
            Ten Min Wind Speed:
            {this.props.station.current.tenMinWindSpeed}
          </h1>
        </Tile>
        <Tile>
          <h1>
            Wind Speed:
            {this.props.station.current.windSpeed}
          </h1>
        </Tile>
        <Tile>
          <h1>
            Wind Direction:
            {this.props.station.current.windDirection}°
          </h1>
        </Tile>
      </div>
    );
  }
}

export default Dashboard;

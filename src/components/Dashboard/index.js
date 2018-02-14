// @flow
import React, { Component } from "react";

import TileContainer from "components/Tiles/Container";
import Tile from "components/Tiles/Tile";
import TileHeader from "components/Tiles/Header";
import TileContent from "components/Tiles/Content";

import Wind from "components/Dashboard/Wind";
import Outside from "components/Dashboard/Outside";
import Inside from "components/Dashboard/Inside";
import Overview from "components/Dashboard/Overview";

import { Station } from "types";
import { fahrenheitToCelsius, mphToKnots } from "utils";

import "./styles.css";

type Props = {
  station: Station
};

class Dashboard extends Component<Props> {
  render() {
    return (
      <TileContainer className="Dashboard">
        <Tile>
          <TileHeader title="Wind" />
          <TileContent full={true}>
            <Wind
              direction={this.props.station.current.windDirection}
              speed={mphToKnots(this.props.station.current.windSpeed)}
              avg={mphToKnots(this.props.station.current.tenMinWindSpeed)}
            />
          </TileContent>
        </Tile>
        <Tile>
          <TileHeader title="Outside" />
          <TileContent>
            <Outside
              temperature={fahrenheitToCelsius(
                this.props.station.current.outTemperature
              )}
              humidity={this.props.station.current.outHumidity}
              rain={this.props.station.current.rainRate}
              icon="sun"
            />
          </TileContent>
        </Tile>
        <Tile>
          <TileHeader title="Inside" />
          <TileContent>
            <Inside
              temperature={fahrenheitToCelsius(
                this.props.station.current.inTemperature
              )}
              humidity={this.props.station.current.inHumidity}
            />
          </TileContent>
        </Tile>
        <Tile>
          <TileHeader title="Overview" />
          <TileContent>
            <Overview datas={this.props.station.datas} />
          </TileContent>
        </Tile>
      </TileContainer>
    );
  }
}

export default Dashboard;

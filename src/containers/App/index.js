// @flow
import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import moment from "moment";

import TopBar from "components/TopBar";
import Dashboard from "components/Dashboard";

import { Station } from "types";

import "./styles.css";

type Props = {
  loading: boolean,
  error: boolean,
  station: Station
};

export class App extends Component<Props> {
  render() {
    if (this.props.loading) return <h1>Loading...</h1>;
    if (this.props.error) return <h1>Error occurred</h1>;

    return (
      <div className="App">
        <TopBar stationName={this.props.station.name} />
        <Dashboard station={this.props.station} />
      </div>
    );
  }
}

const endTime = moment.utc();
const startTime = moment(endTime).subtract(1, "w");
const STATION_QUERY = gql`
  query Station {
    station {
      name
      current {
        inTemperature
        outTemperature
        inHumidity
        outHumidity
        rainRate
        tenMinWindSpeed
        windDirection
        windSpeed
      }
      datas(
        time: {
          startTime: "${startTime.format()}"
          endTime: "${endTime.format()}"
        }
        groupBy: { method: MEAN, interval: HOUR }
      ) {
        time
        outTemperature,
        outHumidity,
        inTemperature,
        inHumidity,
        windSpeed,
        windDirection
      }
    }
  }
`;

const AppWrapper = graphql(STATION_QUERY, {
  options: {
    fetchPolicy: "cache-and-network"
  },
  props: ({ data: { error, loading, station } }) => ({
    error,
    loading,
    station
  })
})(App);

export default AppWrapper;

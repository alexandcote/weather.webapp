// @flow
import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

import TopBar from "components/TopBar";
import Dashboard from "components/Dashboard";

import { Station } from "types";

import "./styles.css";

type Props = {
  loading: boolean,
  error: boolean,
  station: Station
};

class App extends Component<Props> {
  render() {
    if (this.props.loading) return <h1>Loading...</h1>;
    if (this.props.error) return <h1>Error occurred</h1>;

    return (
      <div className="App">
        <TopBar name={this.props.station.name} />
        <Dashboard station={this.props.station} />
      </div>
    );
  }
}

const STATION_QUERY = gql`
  query Station($station_id: ID!) {
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
    }
  }
`;

export default graphql(STATION_QUERY, {
  options: {
    variables: { station_id: 4 },
    fetchPolicy: "cache-and-network"
  },
  props: ({ data: { error, loading, station } }) => ({
    error,
    loading,
    station
  })
})(App);

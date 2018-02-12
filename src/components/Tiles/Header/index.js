// @flow
import React from "react";

import "./styles.css";

type Props = {
  title: string
};

const TileHeader = ({ title }: Props) => (
  <div className="TileHeader">
    <h2 className="TileHeader__title">{title}</h2>
  </div>
);

export default TileHeader;

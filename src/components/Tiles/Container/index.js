// @flow
import React from "react";

import "./styles.css";

type Props = {
  children: any
};

const TileContainer = ({ children }: Props) => (
  <div className="TileContainer">{children}</div>
);

export default TileContainer;

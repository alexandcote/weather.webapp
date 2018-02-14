// @flow
import React from "react";

import "./styles.css";

type Props = {
  children: any
};

const TileContent = ({ children }: Props) => (
  <div className="TileContent">{children}</div>
);

export default TileContent;

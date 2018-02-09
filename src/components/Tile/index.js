// @flow
import React from "react";

import "./styles.css";

type Props = {
  children: any
};

const Tile = ({ children }: Props) => <div className="Tile">{children}</div>;

export default Tile;

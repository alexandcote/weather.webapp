// @flow
import React from "react";

import "./styles.css";

type Props = {
  full?: boolean,
  children: any
};

const TileContent = ({ full, children }: Props) => (
  <div className={full ? "TileContent TileContent--full" : "TileContent"}>
    {children}
  </div>
);

export default TileContent;

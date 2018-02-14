// @flow
import React from "react";

import "./styles.css";

type Props = {
  children: any,
  full?: boolean
};

const TileContent = ({ full, children }: Props) => (
  <div className={full ? "TileContent TileContent--full" : "TileContent"}>
    {children}
  </div>
);

export default TileContent;

// @flow
import React from "react";

import Compass from "components/Compass";

import "./styles.css";

type Props = {
  direction: number,
  speed: number,
  avg: number
};

const Wind = ({ direction, speed, avg }: Props) => (
  <div className="Wind">
    <div className="Wind__header">
      <div>
        <span>Current speed</span>
        {speed} kn
      </div>
      <div>
        <span>10 minutes avg</span>
        {avg} kn
      </div>
    </div>
    <div className="Wind__content">
      <div className="Wind__content-square">
        <Compass direction={direction} />
      </div>
    </div>
  </div>
);

export default Wind;

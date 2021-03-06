/**
 * ReactCompass - a carefully crafted Compass component for React.
 * https://github.com/virtyaluk/react-compass
 *
 * Copyright (c) 2016 Bohdan Shtepan
 * http://modern-dev.com/
 *
 * Licensed under the MIT license.
 *
 * @flow
 */

import React from "react";

import { directionName } from "utils";

import "./styles.css";

type Props = {
  direction: number
};

const Compass = ({ direction }: Props) => {
  const name = directionName(direction);
  const rot = 45 + direction;

  return (
    <div className="Compass">
      <div className="Compass__windrose">
        {[...Array(10)].map((k, i) => (
          <div className="Compass__mark" key={i + 1} />
        ))}
        <div className="Compass__mark--direction-h" />
        <div className="Compass__mark--direction-v" />
      </div>

      <div className="Compass__arrow-container">
        <div
          className="Compass__arrow"
          style={{ transform: `rotate(${rot}deg)` }}
        />
        <div className="Compass__labels">
          <span>{name}</span>
        </div>
      </div>
    </div>
  );
};
export default Compass;

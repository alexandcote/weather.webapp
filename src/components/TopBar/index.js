// @flow
import React from "react";

import "./styles.css";

type Props = {
  name: string
};

const TopBar = ({ name }: Props) => (
  <header className="TopBar">
    <i className="TopBar__logo wu wu-black wu-64 wu-mostlycloudy" />
    <h1 className="TopBar__title">{name}</h1>
  </header>
);

export default TopBar;

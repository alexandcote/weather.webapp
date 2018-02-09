// @flow
import React from "react";

import "./styles.css";
import logo from "./logo.png";

type Props = {
  name: string
};

const TopBar = ({ name }: Props) => (
  <header className="TopBar">
    <img className="TopBar__logo" src={logo} alt="Logo" />
    <h1 className="TopBar__title">{name}</h1>
  </header>
);

export default TopBar;

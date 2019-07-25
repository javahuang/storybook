/* eslint-disable import/first */
import React from "react";

import { storiesOf } from "@storybook/react";
import "./weather.css";

storiesOf("weather", module)
  .add("sunny", () => <Sunny />)
  .add("cloudy", () => <Cloudy />)
  .add("rainy", () => <Rainy />)
  .add("snowy", () => <Snowy />);

function Sunny() {
  return <div className="weather sunny" />;
}

function Cloudy() {
  return <div className="weather cloudy" />;
}

function Rainy() {
  return <div className="weather rainy" />;
}

function Snowy() {
  return <div className="weather snowy" />;
}

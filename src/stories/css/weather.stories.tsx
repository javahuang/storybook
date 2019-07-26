/* eslint-disable import/first */
import React from "react";

import { storiesOf } from "@storybook/react";

import "./weather.css";
import notes from "./weather.md";

storiesOf("css|weather", module).add("all", () => <All />, {
  notes: { markdown: notes }
});

function All() {
  return (
    <>
      <div className="weather sunny" style={{ marginRight: 10 }} />
      <div className="weather cloudy" style={{ marginRight: 10 }} />
      <div className="weather rainy" style={{ marginRight: 10 }} />
      <div className="weather snowy" />
    </>
  );
}

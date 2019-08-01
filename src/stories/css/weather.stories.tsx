/* eslint-disable import/first */
import React from "react";

import { storiesOf } from "@storybook/react";

import "./weather.css";
import notes from "./weather.md";
import LiveEditor, { CodeProps } from "../react/components/LiveEditor";

storiesOf("css|weather", module).add("all", () => <All />, {
  notes: { markdown: notes }
});

const code1: CodeProps = {
  html: `
    <div class="weather sunny">
    </div>
    `,
  css: `
.weather {
  position: relative;
  display: inline-block;
  width: 180px;
  height: 240px;
  background: #23b7e5;
  border-radius: 8px;
}

.sunny:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  background: #f6d963;
  border-radius: 50%;
  box-shadow: 0 0 20px #ff0;
  z-index: 2;
}

.sunny:after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -45px 0 0 -45px;
  width: 90px;
  height: 90px;
  background: #ffeb3b;
  clip-path: polygon(
    50% 0%,
    65.43% 25%,
    93.3% 25%,
    78.87% 50%,
    93.3% 75%,
    64.43% 75%,
    50% 100%,
    35.57% 75%,
    6.7% 75%,
    21.13% 50%,
    6.7% 25%,
    35.57% 25%
  );
  z-index: 1;
  animation: sunScale 2s linear infinite;
}
@keyframes sunScale {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
`
};

function All() {
  return (
    <>
      <div className="weather sunny" style={{ marginRight: 10 }} />
      <div className="weather cloudy" style={{ marginRight: 10 }} />
      <div className="weather rainy" style={{ marginRight: 10 }} />
      <div className="weather snowy" />
      <LiveEditor code={code1} defaultMode="css" />
    </>
  );
}

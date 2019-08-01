/* eslint-disable import/first */
import React from "react";

import { storiesOf } from "@storybook/react";

import "./center.css";
import notes from "./center.md";
import LiveEditor, { CodeProps } from "../../react/components/LiveEditor";

storiesOf("css|布局", module).add("center", () => <All />, {
  notes: { markdown: notes }
});

const code1: CodeProps = {
  html: `
    <div class="t1-p">
          <div class="t1-c">this is a test</div>
    </div>
    `,
  css: `
.t1-p{
  border: 1px solid red;
  text-align: center;
}
.t1-c{
  border: 1px solid black;
  display: inline-block;
}
`
};

function All() {
  return (
    <div>
      <LiveEditor code={code1} defaultMode="css" />
      <LiveEditor code={code1} defaultMode="css" />
    </div>
  );
}

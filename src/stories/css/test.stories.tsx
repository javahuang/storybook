/* eslint-disable import/first */
import React from "react";

import { storiesOf } from "@storybook/react";

import LiveEditor from '../react/components/LiveEditor'
import notes from "./weather.md";

storiesOf("css|测试", module).add("11", () => <All />, {
  notes: { markdown: notes }
});

const code = `
<div>hello world</div>
`


function All() {
  return (
    <>
      <LiveEditor />
    </>
  );
}

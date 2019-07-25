/* eslint-disable import/first */
import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Button from "./index";

const usage = require("./usage.md");

storiesOf("Button", module)
  .add("with text", () => <Button>Hello Button</Button>, {
    notes: { markdown: usage }
  })
  .add("with some emoji", () => (
    <Button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

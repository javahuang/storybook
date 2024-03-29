import { configure } from "@storybook/react";
import "@storybook/addon-console";

// automatically import all files ending in *.stories.js
const req = require.context("../src", true, /\.stories\.t(s|sx)$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

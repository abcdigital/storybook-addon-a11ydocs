import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming";

import pkg from "@abcaustralia/storybook-addon-a11ydocs/package.json";

addons.setConfig({
  theme: create({
    brandTitle: "Accessibility Docs Addon",
    brandUrl: pkg.homepage,
  }),
  sidebar: {
    showRoots: false,
  },
});

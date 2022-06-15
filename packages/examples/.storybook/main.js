module.exports = {
  stories: ["../stories"],
  addons: ["@abcaustralia/storybook-addon-a11ydocs", "@storybook/addon-docs"],
  framework: "@storybook/react",
  features: {
    storyStoreV7: true,
  },
  core: {
    builder: "webpack5",
  },
  // temporary fix: https://github.com/storybookjs/storybook/issues/15336
  typescript: { reactDocgen: false },
};

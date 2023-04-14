/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ["../stories"],
  addons: ["@abcaustralia/storybook-addon-a11ydocs", "@storybook/addon-docs"],
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {},
    },
  },
  docs: {
    autodocs: true,
    defaultName: "Auto Docs",
  },
};

export default config;

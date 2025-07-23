import React from "react";
import {
  DocsContainer,
  Title,
  Subtitle,
  Description,
  Primary,
  Controls,
  Stories,
} from "@storybook/addon-docs/blocks";
import { A11yDocsBlock } from "@abcaustralia/storybook-addon-a11ydocs";

const parameters = {
  docs: {
    container: DocsContainer,
    page: () => {
      return (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Controls />
          <A11yDocsBlock />
          <Stories />
        </>
      );
    },
    inlineStories: true,
    prepareForInline: (story) => story(),
  },
  a11ydocs: {
    presetDescription: `
    ## Description

    *Descriptions* can be written in \`markdown\`! 🥳
    `,
  },
};

const tags = ["autodocs"];

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters,
  tags,
};

export default preview;

import React from "react";
import {
  DocsContainer,
  Title,
  Subtitle,
  Description,
  Primary,
  Controls,
  Stories,
  PRIMARY_STORY,
} from "@storybook/addon-docs";
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
          <Controls story={PRIMARY_STORY} />
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

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters,
};

export default preview;

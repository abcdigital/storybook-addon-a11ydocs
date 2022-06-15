import React from "react";
import {
  DocsContainer,
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from "@storybook/addon-docs";
import { A11yDocsBlock } from "../../storybook-addon-a11ydocs/src/components/A11yDocsBlock";

export const parameters = {
  docs: {
    container: DocsContainer,
    page: () => {
      return (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
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

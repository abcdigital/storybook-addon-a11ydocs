import * as React from "react";
import { Description } from "@storybook/components";
import dedent from "ts-dedent";
import { A11yDocsDescriptionProps } from "./types";

export const A11yDocsDescription = (props: A11yDocsDescriptionProps) => {
  const {
    storyId = "unknown-story",
    presetDescription,
    customProperties,
  } = props;

  const markdown = `
  ## Accessibility
  ${dedent(customProperties?.description || presetDescription)}
  `;

  return (
    <div style={{ marginTop: "25px", marginBottom: "40px" }}>
      <Description key={storyId} markdown={markdown} />
    </div>
  );
};

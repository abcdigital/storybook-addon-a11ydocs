import * as React from "react";
import { Markdown } from "@storybook/blocks";
import dedent from "ts-dedent";
import { A11yDocsDescriptionProps } from "./types";

export const A11yDocsDescription = (props: A11yDocsDescriptionProps) => {
  const { presetDescription, customProperties } = props;

  const markdown = `
  ## Accessibility
  ${dedent(customProperties?.description || presetDescription)}
  `;

  return (
    <div style={{ marginTop: "25px", marginBottom: "40px" }}>
      {/* @ts-ignore Error regarding not accepting a children prop, it does */}
      <Markdown>{markdown}</Markdown>
    </div>
  );
};

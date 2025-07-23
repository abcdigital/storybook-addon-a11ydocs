import * as React from "react";
import { A11yDocsDescription } from "./A11yDocsDescription/A11yDocsDescription";
import type {
  A11yDocsParametersType,
  A11yDocsPropertyItemGroup,
} from "./A11yDocsDescription/types";
import { DocsContext } from "@storybook/addon-docs/blocks";
import { PreparedStory, Renderer } from "storybook/internal/types";

export interface A11yDocsBlockProps {
  customProperties?: A11yDocsPropertyItemGroup;
}

declare global {
  interface Window {
    __DOCS_CONTEXT__: typeof DocsContext;
  }
}

const useDocsContext = () => {
  const mainContext = React.useContext(DocsContext);
  const windowContext = React.useContext(window.__DOCS_CONTEXT__);

  const mainContextAvailable = Object.keys(mainContext).length > 0;

  return mainContextAvailable ? mainContext : windowContext;
};

/**
 * For use inside Storybook Docs and MDX
 */
export const A11yDocsBlock: React.FC<A11yDocsBlockProps> = (props) => {
  const overrideCustomProperties = props.customProperties;

  const context = useDocsContext();

  // @ts-expect-error: primaryStory is a private property
  const primaryStory = (context?.primaryStory as PreparedStory<Renderer>) || {};

  const a11ydocs: A11yDocsParametersType = {
    ...primaryStory?.parameters?.a11ydocs,
  };

  const { presetDescription, ...restProperties } = a11ydocs;

  const customProperties = overrideCustomProperties || restProperties;

  const hasCustomProperties = Object.values(customProperties).length > 0;

  if (!hasCustomProperties) return null;

  return (
    <A11yDocsDescription
      presetDescription={presetDescription}
      customProperties={customProperties}
    />
  );
};

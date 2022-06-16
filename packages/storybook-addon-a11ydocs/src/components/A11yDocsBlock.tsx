import * as React from "react";
import { A11yDocsDescription } from "./A11yDocsDescription/A11yDocsDescription";
import type {
  A11yDocsParametersType,
  A11yDocsPropertyItemGroup,
} from "./A11yDocsDescription/types";
import { DocsContext, DocsContextProps } from "@storybook/addon-docs";

export interface A11yDocsBlockProps {
  customProperties: A11yDocsPropertyItemGroup;
}

declare global {
  interface Window {
    __DOCS_CONTEXT__: React.Context<DocsContextProps>;
  }
}

const useDocsContext = (): DocsContextProps => {
  const mainContext = React.useContext(DocsContext);
  const windowContext = React.useContext(
    window.__DOCS_CONTEXT__
  ) as DocsContextProps;

  const mainContextAvailable = Object.keys(mainContext).length > 0;

  return mainContextAvailable ? mainContext : windowContext;
};

/**
 * For use inside Storybook Docs and MDX
 */
export const A11yDocsBlock: React.FC<A11yDocsBlockProps> = (props: any) => {
  const overrideCustomProperties = props.customProperties;

  const context = useDocsContext();

  const a11ydocs: A11yDocsParametersType = { ...context?.parameters?.a11ydocs };

  const { presetDescription, ...restProperties } = a11ydocs;

  const customProperties = overrideCustomProperties || restProperties;

  const hasCustomProperties = Object.values(customProperties).length > 0;

  if (!hasCustomProperties) return null;

  return (
    <A11yDocsDescription
      storyId={context?.id}
      presetDescription={presetDescription}
      customProperties={customProperties}
    />
  );
};

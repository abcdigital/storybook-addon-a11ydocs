export interface A11yDocsDescriptionProps {
  storyId?: string;
  customProperties: {
    description: string;
  };
  presetDescription: string;
}

export interface A11yDocsPropertyItem {
  description?: string;
}

export interface A11yDocsPropertyItemGroup {
  [customPropertyKey: string]: A11yDocsPropertyItem;
}

/** Additional options which are removed before reaching A11yDocsDescription */
export type A11yDocsParametersType = A11yDocsPropertyItemGroup & {
  presetDescription: string;
};

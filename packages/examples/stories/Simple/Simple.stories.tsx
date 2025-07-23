import { Meta, StoryObj } from "@storybook/react-vite";
import a11ydocs from "../testData";
import React from "react";

const Component = ({
  name,
  description,
}: {
  name: string;
  description?: string;
}) => (
  <div
    style={{
      fontFamily:
        '"Nunito Sans", -apple-system, ".SFNSText-Regular", "San Francisco", BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif',
      backgroundColor: "rgb(245,245,245)",
      color: "#333333",
      borderRadius: "1rem",
      padding: "1rem 2rem",
    }}
  >
    <h1>{name} Component</h1>
    <p>{description ? description : "Mock component."}</p>
  </div>
);

export default {
  title: "Simple Component/CSF",
  component: Component,
} as Meta;

export const DefaultStory: StoryObj = {
  parameters: {
    a11ydocs: a11ydocs.primary,
  },
  render: () => <Component name="Primary" />,
};

export const SecondaryStory: StoryObj = {
  parameters: {
    a11ydocs: a11ydocs.secondary,
  },
  render: () => (
    <Component
      name="Secondary"
      description="Test for various types of markdown."
    />
  ),
};

export const ThirdStory: StoryObj = {
  render: () => (
    <Component
      name="Third"
      description="Test for when no parameters or custom properties are provided."
    />
  ),
};

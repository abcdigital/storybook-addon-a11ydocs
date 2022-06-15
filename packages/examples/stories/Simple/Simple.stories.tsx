import { Meta, StoryObj } from "@storybook/react";
import a11ydocs from "./testData";

const Component = ({ name }) => (
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
    <p>Example component.</p>
  </div>
);

export default {
  title: "Simple Component/CSF",
  component: Component,
  render: () => <Component name="Primary" />,
  parameters: {
    a11ydocs: a11ydocs.primary,
  },
} as Meta;

export const DefaultStory: StoryObj = {};

export const SecondaryStory: StoryObj = {
  parameters: {
    a11ydocs: a11ydocs.secondary,
  },
  render: () => <Component name="Secondary" />,
};

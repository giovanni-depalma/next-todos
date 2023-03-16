import { StoryFn, Meta } from "@storybook/react";
import { Button } from "./Buttons";


export default {
  title: "ui/button/DangerButton",
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
);

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  variant: "primary"
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  variant: "secondary"
};

export const DangerButton = Template.bind({});
DangerButton.args = {
  variant: "danger"
};


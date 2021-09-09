import React from "react";
import { Story, Meta } from "@storybook/react";

import { SideBar, SideBarProps } from "./SideBar";

export default {
  title: "Example/SideBar",
  component: SideBar,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<SideBarProps> = (args) => <SideBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  background: "#269dff",
  color: "white",
  elements: [
    {
      label: "Home",
      link: "/home",
      icon: "home",
    },
    {
      label: "List",
      link: "/list",
      icon: "stack",
    },
    {
      label: "Cloud",
      link: "/cloud",
      icon: "cloud",
    },
    {
      label: "Setting",
      link: "/settings",
      icon: "cog",
    },
  ],
};

export const Secondary = Template.bind({});
Secondary.args = {
  background: "#269dff",
  color: "white",
  elements: [
    {
      label: "Home",
      link: "/home",
      icon: "home",
    },
    {
      label: "List",
      link: "/list",
      icon: "stack",
    },
    {
      label: "Cloud",
      link: "/cloud",
      icon: "cloud",
    },
    {
      label: "Setting",
      link: "/settings",
      icon: "cog",
    },
  ],
};

export const Large = Template.bind({});
Large.args = {
  background: "#269dff",
  color: "white",
  elements: [
    {
      label: "Home",
      link: "/home",
      icon: "home",
    },
    {
      label: "List",
      link: "/list",
      icon: "stack",
    },
    {
      label: "Cloud",
      link: "/cloud",
      icon: "cloud",
    },
    {
      label: "Setting",
      link: "/settings",
      icon: "cog",
    },
  ],
};

export const Small = Template.bind({});
Small.args = {
  background: "#269dff",
  color: "white",
  elements: [
    {
      label: "Home",
      link: "/home",
      icon: "home",
    },
    {
      label: "List",
      link: "/list",
      icon: "stack",
    },
    {
      label: "Cloud",
      link: "/cloud",
      icon: "cloud",
    },
    {
      label: "Setting",
      link: "/settings",
      icon: "cog",
    },
  ],
};

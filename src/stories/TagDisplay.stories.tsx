import React from 'react';
import { Story, Meta } from '@storybook/react';

import { TagDisplay, TagDisplayProps } from './TagDisplay';

export default {
  title: 'Example/TagDisplay',
  component: TagDisplay,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<TagDisplayProps> = (args) => <TagDisplay {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'TagDisplay',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'TagDisplay',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'TagDisplay',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'TagDisplay',
};



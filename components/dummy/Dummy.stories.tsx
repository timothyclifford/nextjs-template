import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import Dummy, { Props } from './Dummy';

export default {
  title: 'Dummy',
  component: Dummy,
} as Meta;

const Template: Story<Props> = (args) => <Dummy {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  value: 'This is a test',
};

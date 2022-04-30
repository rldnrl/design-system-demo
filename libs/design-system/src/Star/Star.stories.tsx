import { Story, Meta } from '@storybook/react';
import { Star, StarProps } from './Star';

export default {
  component: Star,
  title: 'Star',
} as Meta;

const Template: Story<StarProps> = (args) => <Star {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

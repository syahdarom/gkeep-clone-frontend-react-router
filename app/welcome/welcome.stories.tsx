import type { Meta, StoryObj } from '@storybook/react-vite';

import { Welcome } from './welcome';

const meta = {
  title: 'Composite/Welcome',
  component: Welcome,
} satisfies Meta<typeof Welcome>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Main: Story = {
  name: 'Welcome',
};

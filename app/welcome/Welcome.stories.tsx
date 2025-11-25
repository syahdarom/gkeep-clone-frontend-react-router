import type { Meta, StoryObj } from '@storybook/react-vite';

import { Welcome as WelcomeComponent } from './welcome';

const meta = {
  title: 'Composite/Welcome',
  component: WelcomeComponent,
} satisfies Meta<typeof WelcomeComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Welcome: Story = {};

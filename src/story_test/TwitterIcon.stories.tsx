import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { TwitterIcon } from '../test'

const meta: Meta<typeof TwitterIcon> = {
  component: TwitterIcon,
  title: 'Test/TwitterIcon',
  decorators: [
    (Story) => (
      <div style={{ margin: '1rem' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof TwitterIcon>

export const Default: Story = {}

export const Red: Story = {
  args: {
    color: 'red',
  },
}

export const inActive: Story = {
  args: {
    inActive: true,
  },
};
export const Large: Story = {
  args: {
    size: 30,
  },
}

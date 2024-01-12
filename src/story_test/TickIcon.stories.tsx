import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { TickIcon } from '../test'

const meta: Meta<typeof TickIcon> = {
  component: TickIcon,
  title: 'Test/TickIcon',
  decorators: [
    (Story) => (
      <div style={{ margin: '1rem' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof TickIcon>

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

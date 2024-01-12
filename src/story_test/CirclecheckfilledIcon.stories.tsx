import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { CirclecheckfilledIcon } from '../test'

const meta: Meta<typeof CirclecheckfilledIcon> = {
  component: CirclecheckfilledIcon,
  title: 'Test/CirclecheckfilledIcon',
  decorators: [
    (Story) => (
      <div style={{ margin: '1rem' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof CirclecheckfilledIcon>

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

import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { MySelectedIcon } from '../test'

const meta: Meta<typeof MySelectedIcon> = {
  component: MySelectedIcon,
  title: 'Test/MySelectedIcon',
  decorators: [
    (Story) => (
      <div style={{ margin: '1rem' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof MySelectedIcon>

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

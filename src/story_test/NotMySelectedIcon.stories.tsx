import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { NotMySelectedIcon } from '../test'

const meta: Meta<typeof NotMySelectedIcon> = {
  component: NotMySelectedIcon,
  title: 'Test/NotMySelectedIcon',
  decorators: [
    (Story) => (
      <div style={{ margin: '1rem' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof NotMySelectedIcon>

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

import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { StarSelectedBlueIcon } from '../test'

const meta: Meta<typeof StarSelectedBlueIcon> = {
  component: StarSelectedBlueIcon,
  title: 'Test/StarSelectedBlueIcon',
  decorators: [
    (Story) => (
      <div style={{ margin: '1rem' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof StarSelectedBlueIcon>

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

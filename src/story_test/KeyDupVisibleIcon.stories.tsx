import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { KeyDupVisibleIcon } from '../test'

const meta: Meta<typeof KeyDupVisibleIcon> = {
  component: KeyDupVisibleIcon,
  title: 'Test/KeyDupVisibleIcon',
  decorators: [
    (Story) => (
      <div style={{ margin: '1rem' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof KeyDupVisibleIcon>

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

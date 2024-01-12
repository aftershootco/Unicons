import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { LoupeActiveIcon } from '../test'

const meta: Meta<typeof LoupeActiveIcon> = {
  component: LoupeActiveIcon,
  title: 'Test/LoupeActiveIcon',
  decorators: [
    (Story) => (
      <div style={{ margin: '1rem' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof LoupeActiveIcon>

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

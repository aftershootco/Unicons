import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { ProfileIconIcon } from '../test'

const meta: Meta<typeof ProfileIconIcon> = {
  component: ProfileIconIcon,
  title: 'Test/ProfileIconIcon',
  decorators: [
    (Story) => (
      <div style={{ margin: '1rem' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof ProfileIconIcon>

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

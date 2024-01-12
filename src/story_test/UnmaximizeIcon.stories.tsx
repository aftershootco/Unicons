import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { UnmaximizeIcon } from '../test'

const meta: Meta<typeof UnmaximizeIcon> = {
  component: UnmaximizeIcon,
  title: 'Test/UnmaximizeIcon',
  decorators: [
    (Story) => (
      <div style={{ margin: '1rem' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof UnmaximizeIcon>

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

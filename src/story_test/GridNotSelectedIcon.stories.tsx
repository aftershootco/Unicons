import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { GridNotSelectedIcon } from '../test'

const meta: Meta<typeof GridNotSelectedIcon> = {
  component: GridNotSelectedIcon,
  title: 'Test/GridNotSelectedIcon',
  decorators: [
    (Story) => (
      <div style={{ margin: '1rem' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof GridNotSelectedIcon>

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

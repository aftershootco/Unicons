import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { TooltiparrowIcon } from '../test'

const meta: Meta<typeof TooltiparrowIcon> = {
  component: TooltiparrowIcon,
  title: 'Test/TooltiparrowIcon',
  decorators: [
    (Story) => (
      <div style={{ margin: '1rem' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof TooltiparrowIcon>

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

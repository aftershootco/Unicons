import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { CircleCheck2Icon } from '../test'

const meta: Meta<typeof CircleCheck2Icon> = {
  component: CircleCheck2Icon,
  title: 'Test/CircleCheck2Icon',
  decorators: [
    (Story) => (
      <div style={{ margin: '1rem' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof CircleCheck2Icon>

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

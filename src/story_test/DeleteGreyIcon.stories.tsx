import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { DeleteGreyIcon } from '../test'

const meta: Meta<typeof DeleteGreyIcon> = {
  component: DeleteGreyIcon,
  title: 'Test/DeleteGreyIcon',
  decorators: [
    (Story) => (
      <div style={{ margin: '1rem' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof DeleteGreyIcon>

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

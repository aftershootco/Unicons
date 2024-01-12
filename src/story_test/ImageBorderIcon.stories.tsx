import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { ImageBorderIcon } from '../test'

const meta: Meta<typeof ImageBorderIcon> = {
  component: ImageBorderIcon,
  title: 'Test/ImageBorderIcon',
  decorators: [
    (Story) => (
      <div style={{ margin: '1rem' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof ImageBorderIcon>

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

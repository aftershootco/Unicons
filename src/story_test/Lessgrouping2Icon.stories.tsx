import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { Lessgrouping2Icon } from '../test'

const meta: Meta<typeof Lessgrouping2Icon> = {
  component: Lessgrouping2Icon,
  title: 'Test/Lessgrouping2Icon',
  decorators: [
    (Story) => (
      <div style={{ margin: '1rem' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Lessgrouping2Icon>

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

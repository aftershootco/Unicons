import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { Lessgrouping1Icon } from '../test'

const meta: Meta<typeof Lessgrouping1Icon> = {
  component: Lessgrouping1Icon,
  title: 'Test/Lessgrouping1Icon',
  decorators: [
    (Story) => (
      <div style={{ margin: '1rem' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Lessgrouping1Icon>

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
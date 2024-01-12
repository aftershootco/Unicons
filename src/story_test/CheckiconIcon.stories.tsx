import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { CheckiconIcon } from '../test'

const meta: Meta<typeof CheckiconIcon> = {
  component: CheckiconIcon,
  title: 'Test/CheckiconIcon',
  decorators: [
    (Story) => (
      <div style={{ margin: '1rem' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof CheckiconIcon>

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

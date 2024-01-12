import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { Moregrouping2Icon } from '../test'

const meta: Meta<typeof Moregrouping2Icon> = {
  component: Moregrouping2Icon,
  title: 'Test/Moregrouping2Icon',
  decorators: [
    (Story) => (
      <div style={{ margin: '1rem' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Moregrouping2Icon>

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

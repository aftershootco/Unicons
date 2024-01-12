import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { SparkleGrayIcon } from '../test'

const meta: Meta<typeof SparkleGrayIcon> = {
  component: SparkleGrayIcon,
  title: 'Test/SparkleGrayIcon',
  decorators: [
    (Story) => (
      <div style={{ margin: '1rem' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof SparkleGrayIcon>

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

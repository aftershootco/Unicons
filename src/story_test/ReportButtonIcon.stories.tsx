import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { ReportButtonIcon } from '../test'

const meta: Meta<typeof ReportButtonIcon> = {
  component: ReportButtonIcon,
  title: 'Test/ReportButtonIcon',
  decorators: [
    (Story) => (
      <div style={{ margin: '1rem' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof ReportButtonIcon>

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

import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { KeyFacesUnselectedIcon } from '../test'

const meta: Meta<typeof KeyFacesUnselectedIcon> = {
  component: KeyFacesUnselectedIcon,
  title: 'Test/KeyFacesUnselectedIcon',
  decorators: [
    (Story) => (
      <div style={{ margin: '1rem' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof KeyFacesUnselectedIcon>

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

import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { CaptureOneIcon } from '../../Icons'

const meta: Meta<typeof CaptureOneIcon> = {
	component: CaptureOneIcon,
	title: 'logo/CaptureOneIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof CaptureOneIcon>

export const Default: Story = {}

export const Large: Story = {
	args: {
		size: 30,
	},
}

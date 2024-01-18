import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { LowPowerIcon } from '../../../icons'

const meta: Meta<typeof LowPowerIcon> = {
	component: LowPowerIcon,
	title: 'special/LowPowerIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof LowPowerIcon>

export const Default: Story = {}

export const Enable: Story = {
	args: {
		variant: 'enable',
	},
}

export const Large: Story = {
	args: {
		size: 30,
	},
}

import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { HighPowerIcon } from '../../../Icons'

const meta: Meta<typeof HighPowerIcon> = {
	component: HighPowerIcon,
	title: 'special/HighPowerIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof HighPowerIcon>

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

import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { MidPowerIcon } from '../../icons'

const meta: Meta<typeof MidPowerIcon> = {
	component: MidPowerIcon,
	title: 'enable/MidPowerIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof MidPowerIcon>

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

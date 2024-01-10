import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { CouponIcon } from '../test'

const meta: Meta<typeof CouponIcon> = {
	component: CouponIcon,
	title: 'Test/CouponIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof CouponIcon>

export const Default: Story = {}

export const Red: Story = {
	args: {
		color: 'red',
	},
}

export const Large: Story = {
	args: {
		size: 30,
	},
}

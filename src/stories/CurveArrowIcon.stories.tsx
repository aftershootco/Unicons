import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { CurveArrowIcon } from '../Icons'

const meta: Meta<typeof CurveArrowIcon> = {
	component: CurveArrowIcon,
	title: 'icons/CurveArrowIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof CurveArrowIcon>

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

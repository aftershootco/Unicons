import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { FailFillCircleBgIcon } from '../../../icons'

const meta: Meta<typeof FailFillCircleBgIcon> = {
	component: FailFillCircleBgIcon,
	title: 'edit/icons/FailFillCircleBgIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof FailFillCircleBgIcon>

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
}

export const yellowBg: Story = {
	args: {
		color: 'black',
		bgColor: 'yellow',
	},
}

export const fillColor: Story = {
	args: {
		color: 'black',
		bgColor: 'yellow',
		fillColor: 'red',
	},
}

export const Large: Story = {
	args: {
		size: 30,
	},
}

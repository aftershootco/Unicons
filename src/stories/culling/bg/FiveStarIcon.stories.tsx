import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { FiveStarIcon } from '../../../Icons'

const meta: Meta<typeof FiveStarIcon> = {
	component: FiveStarIcon,
	title: 'background/FiveStarIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof FiveStarIcon>

export const Default: Story = {
	args: {
		color: 'black',
		bgColor: 'white',
	},
}

export const Red: Story = {
	args: {
		color: 'red',
		bgColor: 'white',
	},
}

export const inActive: Story = {
	args: {
		inActive: true,
		bgColor: 'white',
	},
}

export const yellowBg: Story = {
	args: {
		color: 'black',
		bgColor: 'yellow',
	},
}

export const Large: Story = {
	args: {
		size: 30,
		bgColor: 'black',
	},
}

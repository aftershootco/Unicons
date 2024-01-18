import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { SortDuplicatesIcon } from '../../../icons'

const meta: Meta<typeof SortDuplicatesIcon> = {
	component: SortDuplicatesIcon,
	title: 'Icons/SortDuplicatesIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof SortDuplicatesIcon>

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

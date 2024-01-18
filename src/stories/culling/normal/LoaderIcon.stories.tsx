import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { LoaderIcon } from '../../../icons'

const meta: Meta<typeof LoaderIcon> = {
	component: LoaderIcon,
	title: 'icons/LoaderIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof LoaderIcon>

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

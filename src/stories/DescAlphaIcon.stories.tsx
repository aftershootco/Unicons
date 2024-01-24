import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { DescAlphaIcon } from '../icons'

const meta: Meta<typeof DescAlphaIcon> = {
	component: DescAlphaIcon,
	title: 'culling/DescAlphaIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof DescAlphaIcon>

export const Default: Story = {}

export const Yellow: Story = {
	args: {
		color: 'yellow',
	},
}

export const GreenAccent: Story = {
	args: {
		accentColor: 'green',
	},
}

export const InActive: Story = {
	args: {
		inActive: true,
	},
}

export const Large: Story = {
	args: {
		size: 30,
	},
}

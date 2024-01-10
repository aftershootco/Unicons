import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { CrownIcon } from '../test'

const meta: Meta<typeof CrownIcon> = {
	component: CrownIcon,
	title: 'Test/CrownIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof CrownIcon>

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

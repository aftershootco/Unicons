import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { CrownbigIcon } from '../test'

const meta: Meta<typeof CrownbigIcon> = {
	component: CrownbigIcon,
	title: 'Test/CrownbigIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof CrownbigIcon>

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

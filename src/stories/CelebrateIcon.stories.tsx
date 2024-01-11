import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { CelebrateIcon } from '../Icons'

const meta: Meta<typeof CelebrateIcon> = {
	component: CelebrateIcon,
	title: 'icons/CelebrateIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof CelebrateIcon>

export const Default: Story = {}

export const Large: Story = {
	args: {
		size: 50,
	},
}

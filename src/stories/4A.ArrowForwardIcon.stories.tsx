import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { ArrowForwardIcon } from '../Icons'

const meta: Meta<typeof ArrowForwardIcon> = {
	component: ArrowForwardIcon,
	title: 'Icons/ArrowForwardIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof ArrowForwardIcon>

export const Primary: Story = {}

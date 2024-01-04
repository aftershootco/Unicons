import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { ArrowBackIcon } from '../Icons'

const meta: Meta<typeof ArrowBackIcon> = {
	component: ArrowBackIcon,
	title: 'Icons/ArrowBackIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof ArrowBackIcon>

export const Primary: Story = {}

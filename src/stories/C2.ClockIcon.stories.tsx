import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { ClockIcon } from '../Icons'

const meta: Meta<typeof ClockIcon> = {
	component: ClockIcon,
	title: 'Icons/ClockIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof ClockIcon>

export const Primary: Story = {}

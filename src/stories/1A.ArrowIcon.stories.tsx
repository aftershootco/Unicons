import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { ArrowIcon } from '../Icons'

const meta: Meta<typeof ArrowIcon> = {
	component: ArrowIcon,
	title: 'Icons/ArrowIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof ArrowIcon>

export const Primary: Story = {}

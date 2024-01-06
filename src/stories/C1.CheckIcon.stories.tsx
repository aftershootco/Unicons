import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { CheckIcon } from '../Icons'

const meta: Meta<typeof CheckIcon> = {
	component: CheckIcon,
	title: 'Icons/CheckIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof CheckIcon>

export const Primary: Story = {}
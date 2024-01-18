import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { AftershootLogoWhite } from '../../../icons'

const meta: Meta<typeof AftershootLogoWhite> = {
	component: AftershootLogoWhite,
	title: 'icons/AftershootLogoWhite',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof AftershootLogoWhite>

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

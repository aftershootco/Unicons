import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { ColorPaletteIcon } from '../../../icons'

const meta: Meta<typeof ColorPaletteIcon> = {
	component: ColorPaletteIcon,
	title: 'icons/ColorPaletteIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof ColorPaletteIcon>

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

export const onClick: Story = {
	args: {
		onClick: () => console.log('yo'),
	},
}

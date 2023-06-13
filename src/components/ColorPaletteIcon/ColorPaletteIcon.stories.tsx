import { Meta, Story } from '@storybook/react'
import React from 'react'
import { ColorPaletteIcon } from '..'

export default {
	title: 'component/ColorPaletteIcon',
	component: ColorPaletteIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <ColorPaletteIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

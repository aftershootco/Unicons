import { Meta, Story } from '@storybook/react'
import React from 'react'
import { MouseRightSelected } from '..'

export default {
	title: 'component/MouseRightSelected',
	component: MouseRightSelected,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <MouseRightSelected {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

import { Meta, Story } from '@storybook/react'
import React from 'react'
import { MouseLeftSelected } from '..'

export default {
	title: 'component/MouseLeftSelected',
	component: MouseLeftSelected,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <MouseLeftSelected {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

import { Meta, Story } from '@storybook/react'
import React from 'react'
import { IncAlphaSelectedIcon } from '..'

export default {
	title: 'component/IncAlphaSelectedIcon',
	component: IncAlphaSelectedIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <IncAlphaSelectedIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

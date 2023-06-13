import { Meta, Story } from '@storybook/react'
import React from 'react'
import { AppleIcon } from '..'

export default {
	title: 'component/AppleIcon',
	component: AppleIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <AppleIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

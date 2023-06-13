import { Meta, Story } from '@storybook/react'
import React from 'react'
import { ArrowUpIcon } from '..'

export default {
	title: 'component/ArrowUpIcon',
	component: ArrowUpIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <ArrowUpIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

import { Meta, Story } from '@storybook/react'
import React from 'react'
import { ArrowUpIcon2 } from '..'

export default {
	title: 'component/ArrowUpIcon2',
	component: ArrowUpIcon2,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <ArrowUpIcon2 {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

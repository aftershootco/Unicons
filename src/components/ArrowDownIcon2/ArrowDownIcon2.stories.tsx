import { Meta, Story } from '@storybook/react'
import React from 'react'
import { ArrowDownIcon2 } from '..'

export default {
	title: 'component/ArrowDownIcon2',
	component: ArrowDownIcon2,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <ArrowDownIcon2 {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

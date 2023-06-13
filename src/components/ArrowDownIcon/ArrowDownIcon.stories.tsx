import { Meta, Story } from '@storybook/react'
import React from 'react'
import { ArrowDownIcon } from '..'

export default {
	title: 'component/ArrowDownIcon',
	component: ArrowDownIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <ArrowDownIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

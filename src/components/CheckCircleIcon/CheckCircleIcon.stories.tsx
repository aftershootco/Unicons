import { Meta, Story } from '@storybook/react'
import React from 'react'
import { CheckCircleIcon } from '..'

export default {
	title: 'component/CheckCircleIcon',
	component: CheckCircleIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <CheckCircleIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

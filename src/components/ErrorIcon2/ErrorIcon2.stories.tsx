import { Meta, Story } from '@storybook/react'
import React from 'react'
import { ErrorIcon2 } from '..'

export default {
	title: 'component/ErrorIcon2',
	component: ErrorIcon2,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <ErrorIcon2 {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

import { Meta, Story } from '@storybook/react'
import React from 'react'
import { ErrorIcon } from '..'

export default {
	title: 'component/ErrorIcon',
	component: ErrorIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <ErrorIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

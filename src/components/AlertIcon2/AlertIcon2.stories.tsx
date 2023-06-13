import { Meta, Story } from '@storybook/react'
import React from 'react'
import { AlertIcon2 } from '..'

export default {
	title: 'component/AlertIcon2',
	component: AlertIcon2,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <AlertIcon2 {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

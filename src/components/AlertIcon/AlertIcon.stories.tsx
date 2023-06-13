import { Meta, Story } from '@storybook/react'
import React from 'react'
import { AlertIcon } from '..'

export default {
	title: 'component/AlertIcon',
	component: AlertIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <AlertIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

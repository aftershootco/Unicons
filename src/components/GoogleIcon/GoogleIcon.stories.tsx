import { Meta, Story } from '@storybook/react'
import React from 'react'
import { GoogleIcon } from '..'

export default {
	title: 'component/GoogleIcon',
	component: GoogleIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <GoogleIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

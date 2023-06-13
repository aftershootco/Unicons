import { Meta, Story } from '@storybook/react'
import React from 'react'
import { FacebookIcon } from '..'

export default {
	title: 'component/FacebookIcon',
	component: FacebookIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <FacebookIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

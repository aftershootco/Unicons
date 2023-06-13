import { Meta, Story } from '@storybook/react'
import React from 'react'
import { FacebookColorIcon } from '..'

export default {
	title: 'component/FacebookColorIcon',
	component: FacebookColorIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <FacebookColorIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

import { Meta, Story } from '@storybook/react'
import React from 'react'
import { ConfettiLeftIcon } from '..'

export default {
	title: 'component/ConfettiLeftIcon',
	component: ConfettiLeftIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <ConfettiLeftIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

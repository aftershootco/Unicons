import { Meta, Story } from '@storybook/react'
import React from 'react'
import { ClockIcon } from '..'

export default {
	title: 'component/ClockIcon',
	component: ClockIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <ClockIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

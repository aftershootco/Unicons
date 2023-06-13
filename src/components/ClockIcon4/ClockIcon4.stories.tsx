import { Meta, Story } from '@storybook/react'
import React from 'react'
import { ClockIcon4 } from '..'

export default {
	title: 'component/ClockIcon4',
	component: ClockIcon4,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <ClockIcon4 {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

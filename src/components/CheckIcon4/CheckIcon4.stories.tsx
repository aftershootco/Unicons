import { Meta, Story } from '@storybook/react'
import React from 'react'
import { CheckIcon4 } from '..'

export default {
	title: 'component/CheckIcon4',
	component: CheckIcon4,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <CheckIcon4 {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

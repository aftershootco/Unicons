import { Meta, Story } from '@storybook/react'
import React from 'react'
import { CheckIcon2 } from '..'

export default {
	title: 'component/CheckIcon2',
	component: CheckIcon2,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <CheckIcon2 {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

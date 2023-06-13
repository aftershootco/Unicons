import { Meta, Story } from '@storybook/react'
import React from 'react'
import { CheckIcon } from '..'

export default {
	title: 'component/CheckIcon',
	component: CheckIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <CheckIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

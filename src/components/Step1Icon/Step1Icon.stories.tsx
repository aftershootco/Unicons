import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Step1Icon } from '..'

export default {
	title: 'component/Step1Icon',
	component: Step1Icon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <Step1Icon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

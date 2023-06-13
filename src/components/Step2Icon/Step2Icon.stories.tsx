import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Step2Icon } from '..'

export default {
	title: 'component/Step2Icon',
	component: Step2Icon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <Step2Icon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

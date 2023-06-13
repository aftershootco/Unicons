import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Step3Icon } from '..'

export default {
	title: 'component/Step3Icon',
	component: Step3Icon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <Step3Icon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

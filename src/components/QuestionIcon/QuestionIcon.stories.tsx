import { Meta, Story } from '@storybook/react'
import React from 'react'
import { QuestionIcon } from '..'

export default {
	title: 'component/QuestionIcon',
	component: QuestionIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <QuestionIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

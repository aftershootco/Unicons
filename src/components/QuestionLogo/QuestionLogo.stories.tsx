import { Meta, Story } from '@storybook/react'
import React from 'react'
import { QuestionLogo } from '..'

export default {
	title: 'component/QuestionLogo',
	component: QuestionLogo,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <QuestionLogo {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

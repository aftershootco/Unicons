import { Meta, Story } from '@storybook/react'
import React from 'react'
import { HighenabledIcon } from '..'

export default {
	title: 'component/HighenabledIcon',
	component: HighenabledIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <HighenabledIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

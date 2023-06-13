import { Meta, Story } from '@storybook/react'
import React from 'react'
import { ArrowBackIcon } from '..'

export default {
	title: 'component/ArrowBackIcon',
	component: ArrowBackIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <ArrowBackIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

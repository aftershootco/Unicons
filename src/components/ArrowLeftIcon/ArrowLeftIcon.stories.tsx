import { Meta, Story } from '@storybook/react'
import React from 'react'
import { ArrowLeftIcon } from '..'

export default {
	title: 'component/ArrowLeftIcon',
	component: ArrowLeftIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <ArrowLeftIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

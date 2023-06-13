import { Meta, Story } from '@storybook/react'
import React from 'react'
import { ArrowForwardIcon } from '..'

export default {
	title: 'component/ArrowForwardIcon',
	component: ArrowForwardIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <ArrowForwardIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

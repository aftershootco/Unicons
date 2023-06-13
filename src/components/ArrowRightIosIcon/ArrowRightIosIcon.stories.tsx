import { Meta, Story } from '@storybook/react'
import React from 'react'
import { ArrowRightIosIcon } from '..'

export default {
	title: 'component/ArrowRightIosIcon',
	component: ArrowRightIosIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <ArrowRightIosIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

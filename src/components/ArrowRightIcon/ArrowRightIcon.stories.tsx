import { Meta, Story } from '@storybook/react'
import React from 'react'
import { ArrowRightIcon } from '..'

export default {
	title: 'component/ArrowRightIcon',
	component: ArrowRightIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <ArrowRightIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

import { Meta, Story } from '@storybook/react'
import React from 'react'
import { ArrowIcon } from '..'

export default {
	title: 'component/ArrowIcon',
	component: ArrowIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <ArrowIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

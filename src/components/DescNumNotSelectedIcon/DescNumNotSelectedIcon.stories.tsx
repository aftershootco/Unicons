import { Meta, Story } from '@storybook/react'
import React from 'react'
import { DescNumNotSelectedIcon } from '..'

export default {
	title: 'component/DescNumNotSelectedIcon',
	component: DescNumNotSelectedIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <DescNumNotSelectedIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

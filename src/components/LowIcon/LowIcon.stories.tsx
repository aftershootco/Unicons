import { Meta, Story } from '@storybook/react'
import React from 'react'
import { LowIcon } from '..'

export default {
	title: 'component/LowIcon',
	component: LowIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <LowIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

import { Meta, Story } from '@storybook/react'
import React from 'react'
import { InActiveSprayCanIcon } from '..'

export default {
	title: 'component/InActiveSprayCanIcon',
	component: InActiveSprayCanIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <InActiveSprayCanIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

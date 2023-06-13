import { Meta, Story } from '@storybook/react'
import React from 'react'
import { GlassIcon } from '..'

export default {
	title: 'component/GlassIcon',
	component: GlassIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <GlassIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

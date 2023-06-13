import { Meta, Story } from '@storybook/react'
import React from 'react'
import { IncNumNotSelectedIcon } from '..'

export default {
	title: 'component/IncNumNotSelectedIcon',
	component: IncNumNotSelectedIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <IncNumNotSelectedIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

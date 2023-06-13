import { Meta, Story } from '@storybook/react'
import React from 'react'
import { NoneSelectedIcon } from '..'

export default {
	title: 'component/NoneSelectedIcon',
	component: NoneSelectedIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <NoneSelectedIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

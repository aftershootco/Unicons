import { Meta, Story } from '@storybook/react'
import React from 'react'
import { MySelectedIcon } from '..'

export default {
	title: 'component/MySelectedIcon',
	component: MySelectedIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <MySelectedIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

import { Meta, Story } from '@storybook/react'
import React from 'react'
import { ListNotSelectedIcon } from '..'

export default {
	title: 'component/ListNotSelectedIcon',
	component: ListNotSelectedIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <ListNotSelectedIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

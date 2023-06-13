import { Meta, Story } from '@storybook/react'
import React from 'react'
import { ListNotSelectedIcon3 } from '..'

export default {
	title: 'component/ListNotSelectedIcon3',
	component: ListNotSelectedIcon3,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <ListNotSelectedIcon3 {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

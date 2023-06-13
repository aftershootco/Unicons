import { Meta, Story } from '@storybook/react'
import React from 'react'
import { ListSelectedIcon3 } from '..'

export default {
	title: 'component/ListSelectedIcon3',
	component: ListSelectedIcon3,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <ListSelectedIcon3 {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

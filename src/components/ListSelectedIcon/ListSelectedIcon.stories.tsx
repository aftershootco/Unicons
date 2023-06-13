import { Meta, Story } from '@storybook/react'
import React from 'react'
import { ListSelectedIcon } from '..'

export default {
	title: 'component/ListSelectedIcon',
	component: ListSelectedIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <ListSelectedIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

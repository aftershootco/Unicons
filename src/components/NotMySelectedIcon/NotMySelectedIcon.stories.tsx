import { Meta, Story } from '@storybook/react'
import React from 'react'
import { NotMySelectedIcon } from '..'

export default {
	title: 'component/NotMySelectedIcon',
	component: NotMySelectedIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <NotMySelectedIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

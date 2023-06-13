import { Meta, Story } from '@storybook/react'
import React from 'react'
import { SortIcon } from '..'

export default {
	title: 'component/SortIcon',
	component: SortIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <SortIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

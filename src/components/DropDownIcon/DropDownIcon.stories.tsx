import { Meta, Story } from '@storybook/react'
import React from 'react'
import { DropDownIcon } from '..'

export default {
	title: 'component/DropDownIcon',
	component: DropDownIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <DropDownIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

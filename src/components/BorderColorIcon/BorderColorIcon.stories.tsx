import { Meta, Story } from '@storybook/react'
import React from 'react'
import { BorderColorIcon } from '..'

export default {
	title: 'component/BorderColorIcon',
	component: BorderColorIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <BorderColorIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

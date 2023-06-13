import { Meta, Story } from '@storybook/react'
import React from 'react'
import { ViewAllIcon } from '..'

export default {
	title: 'component/ViewAllIcon',
	component: ViewAllIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <ViewAllIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

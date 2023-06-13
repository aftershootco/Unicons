import { Meta, Story } from '@storybook/react'
import React from 'react'
import { RefreshIcon } from '..'

export default {
	title: 'component/RefreshIcon',
	component: RefreshIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <RefreshIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

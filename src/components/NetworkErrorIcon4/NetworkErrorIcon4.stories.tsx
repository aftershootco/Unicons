import { Meta, Story } from '@storybook/react'
import React from 'react'
import { NetworkErrorIcon4 } from '..'

export default {
	title: 'component/NetworkErrorIcon4',
	component: NetworkErrorIcon4,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <NetworkErrorIcon4 {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

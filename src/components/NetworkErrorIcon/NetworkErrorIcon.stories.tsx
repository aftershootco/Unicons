import { Meta, Story } from '@storybook/react'
import React from 'react'
import { NetworkErrorIcon } from '..'

export default {
	title: 'component/NetworkErrorIcon',
	component: NetworkErrorIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <NetworkErrorIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

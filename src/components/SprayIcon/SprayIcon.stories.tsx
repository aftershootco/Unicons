import { Meta, Story } from '@storybook/react'
import React from 'react'
import { SprayIcon } from '..'

export default {
	title: 'component/SprayIcon',
	component: SprayIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <SprayIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

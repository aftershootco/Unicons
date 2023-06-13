import { Meta, Story } from '@storybook/react'
import React from 'react'
import { SettingsIcon } from '..'

export default {
	title: 'component/SettingsIcon',
	component: SettingsIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <SettingsIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

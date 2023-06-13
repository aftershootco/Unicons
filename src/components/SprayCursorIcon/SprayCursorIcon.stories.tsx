import { Meta, Story } from '@storybook/react'
import React from 'react'
import { SprayCursorIcon } from '..'

export default {
	title: 'component/SprayCursorIcon',
	component: SprayCursorIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <SprayCursorIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

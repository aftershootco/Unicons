import { Meta, Story } from '@storybook/react'
import React from 'react'
import { KeyIcon } from '..'

export default {
	title: 'component/KeyIcon',
	component: KeyIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <KeyIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

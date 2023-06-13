import { Meta, Story } from '@storybook/react'
import React from 'react'
import { KeyDupInvIcon } from '..'

export default {
	title: 'component/KeyDupInvIcon',
	component: KeyDupInvIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <KeyDupInvIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

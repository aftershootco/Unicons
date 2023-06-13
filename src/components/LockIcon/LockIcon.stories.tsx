import { Meta, Story } from '@storybook/react'
import React from 'react'
import { LockIcon } from '..'

export default {
	title: 'component/LockIcon',
	component: LockIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <LockIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

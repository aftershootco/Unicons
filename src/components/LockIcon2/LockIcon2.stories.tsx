import { Meta, Story } from '@storybook/react'
import React from 'react'
import { LockIcon2 } from '..'

export default {
	title: 'component/LockIcon2',
	component: LockIcon2,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <LockIcon2 {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

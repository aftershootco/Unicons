import { Meta, Story } from '@storybook/react'
import React from 'react'
import { CancelIcon } from '..'

export default {
	title: 'component/CancelIcon',
	component: CancelIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <CancelIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

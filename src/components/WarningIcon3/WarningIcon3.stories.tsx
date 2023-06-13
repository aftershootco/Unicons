import { Meta, Story } from '@storybook/react'
import React from 'react'
import { WarningIcon3 } from '..'

export default {
	title: 'component/WarningIcon3',
	component: WarningIcon3,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <WarningIcon3 {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

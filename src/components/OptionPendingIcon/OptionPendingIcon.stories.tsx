import { Meta, Story } from '@storybook/react'
import React from 'react'
import { OptionPendingIcon } from '..'

export default {
	title: 'component/OptionPendingIcon',
	component: OptionPendingIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <OptionPendingIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

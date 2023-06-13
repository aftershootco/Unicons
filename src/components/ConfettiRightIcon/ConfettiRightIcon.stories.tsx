import { Meta, Story } from '@storybook/react'
import React from 'react'
import { ConfettiRightIcon } from '..'

export default {
	title: 'component/ConfettiRightIcon',
	component: ConfettiRightIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <ConfettiRightIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

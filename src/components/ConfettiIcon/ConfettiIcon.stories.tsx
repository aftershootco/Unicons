import { Meta, Story } from '@storybook/react'
import React from 'react'
import { ConfettiIcon } from '..'

export default {
	title: 'component/ConfettiIcon',
	component: ConfettiIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <ConfettiIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

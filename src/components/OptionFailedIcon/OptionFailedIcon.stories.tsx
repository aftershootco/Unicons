import { Meta, Story } from '@storybook/react'
import React from 'react'
import { OptionFailedIcon } from '..'

export default {
	title: 'component/OptionFailedIcon',
	component: OptionFailedIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <OptionFailedIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

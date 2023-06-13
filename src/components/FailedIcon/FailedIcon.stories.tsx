import { Meta, Story } from '@storybook/react'
import React from 'react'
import { FailedIcon } from '..'

export default {
	title: 'component/FailedIcon',
	component: FailedIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <FailedIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

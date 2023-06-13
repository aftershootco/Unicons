import { Meta, Story } from '@storybook/react'
import React from 'react'
import { CloseIcon } from '..'

export default {
	title: 'component/CloseIcon',
	component: CloseIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <CloseIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

import { Meta, Story } from '@storybook/react'
import React from 'react'
import { BlueTickIcon } from '..'

export default {
	title: 'component/BlueTickIcon',
	component: BlueTickIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <BlueTickIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

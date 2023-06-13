import { Meta, Story } from '@storybook/react'
import React from 'react'
import { CircleCheckIcon } from '..'

export default {
	title: 'component/CircleCheckIcon',
	component: CircleCheckIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <CircleCheckIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

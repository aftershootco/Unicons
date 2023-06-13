import { Meta, Story } from '@storybook/react'
import React from 'react'
import { RightSignIcon } from '..'

export default {
	title: 'component/RightSignIcon',
	component: RightSignIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <RightSignIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

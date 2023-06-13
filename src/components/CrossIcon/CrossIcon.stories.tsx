import { Meta, Story } from '@storybook/react'
import React from 'react'
import { CrossIcon } from '..'

export default {
	title: 'component/CrossIcon',
	component: CrossIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <CrossIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

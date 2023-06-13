import { Meta, Story } from '@storybook/react'
import React from 'react'
import { ExpandIcon } from '..'

export default {
	title: 'component/ExpandIcon',
	component: ExpandIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <ExpandIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

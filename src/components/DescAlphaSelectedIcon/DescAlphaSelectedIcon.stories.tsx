import { Meta, Story } from '@storybook/react'
import React from 'react'
import { DescAlphaSelectedIcon } from '..'

export default {
	title: 'component/DescAlphaSelectedIcon',
	component: DescAlphaSelectedIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <DescAlphaSelectedIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

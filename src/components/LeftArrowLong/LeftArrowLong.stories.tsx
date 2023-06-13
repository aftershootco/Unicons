import { Meta, Story } from '@storybook/react'
import React from 'react'
import { LeftArrowLong } from '..'

export default {
	title: 'component/LeftArrowLong',
	component: LeftArrowLong,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <LeftArrowLong {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

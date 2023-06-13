import { Meta, Story } from '@storybook/react'
import React from 'react'
import { RightArrowLong } from '..'

export default {
	title: 'component/RightArrowLong',
	component: RightArrowLong,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <RightArrowLong {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

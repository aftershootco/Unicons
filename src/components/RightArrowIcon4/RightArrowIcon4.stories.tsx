import { Meta, Story } from '@storybook/react'
import React from 'react'
import { RightArrowIcon4 } from '..'

export default {
	title: 'component/RightArrowIcon4',
	component: RightArrowIcon4,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <RightArrowIcon4 {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

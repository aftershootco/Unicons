import { Meta, Story } from '@storybook/react'
import React from 'react'
import { LeftArrow } from '..'

export default {
	title: 'component/LeftArrow',
	component: LeftArrow,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <LeftArrow {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

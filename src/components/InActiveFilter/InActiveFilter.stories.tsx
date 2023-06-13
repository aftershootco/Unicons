import { Meta, Story } from '@storybook/react'
import React from 'react'
import { InActiveFilter } from '..'

export default {
	title: 'component/InActiveFilter',
	component: InActiveFilter,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <InActiveFilter {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

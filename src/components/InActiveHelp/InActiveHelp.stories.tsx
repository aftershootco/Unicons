import { Meta, Story } from '@storybook/react'
import React from 'react'
import { InActiveHelp } from '..'

export default {
	title: 'component/InActiveHelp',
	component: InActiveHelp,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <InActiveHelp {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

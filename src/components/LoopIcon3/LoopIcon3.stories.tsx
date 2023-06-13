import { Meta, Story } from '@storybook/react'
import React from 'react'
import { LoopIcon3 } from '..'

export default {
	title: 'component/LoopIcon3',
	component: LoopIcon3,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <LoopIcon3 {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

import { Meta, Story } from '@storybook/react'
import React from 'react'
import { LoopIcon } from '..'

export default {
	title: 'component/LoopIcon',
	component: LoopIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <LoopIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

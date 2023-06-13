import { Meta, Story } from '@storybook/react'
import React from 'react'
import { KeyBoardArrowUpIcon } from '..'

export default {
	title: 'component/KeyBoardArrowUpIcon',
	component: KeyBoardArrowUpIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <KeyBoardArrowUpIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

import { Meta, Story } from '@storybook/react'
import React from 'react'
import { KeyBoardArrowDownIcon } from '..'

export default {
	title: 'component/KeyBoardArrowDownIcon',
	component: KeyBoardArrowDownIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <KeyBoardArrowDownIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

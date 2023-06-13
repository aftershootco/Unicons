import { Meta, Story } from '@storybook/react'
import React from 'react'
import { KeyBoardArrowLeftIcon } from '..'

export default {
	title: 'component/KeyBoardArrowLeftIcon',
	component: KeyBoardArrowLeftIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <KeyBoardArrowLeftIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

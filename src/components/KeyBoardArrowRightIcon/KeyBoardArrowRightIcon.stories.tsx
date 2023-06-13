import { Meta, Story } from '@storybook/react'
import React from 'react'
import { KeyBoardArrowRightIcon } from '..'

export default {
	title: 'component/KeyBoardArrowRightIcon',
	component: KeyBoardArrowRightIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <KeyBoardArrowRightIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

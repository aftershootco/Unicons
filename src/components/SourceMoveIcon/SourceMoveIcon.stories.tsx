import { Meta, Story } from '@storybook/react'
import React from 'react'
import { SourceMoveIcon } from '..'

export default {
	title: 'component/SourceMoveIcon',
	component: SourceMoveIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <SourceMoveIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

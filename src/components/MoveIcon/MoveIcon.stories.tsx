import { Meta, Story } from '@storybook/react'
import React from 'react'
import { MoveIcon } from '..'

export default {
	title: 'component/MoveIcon',
	component: MoveIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <MoveIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

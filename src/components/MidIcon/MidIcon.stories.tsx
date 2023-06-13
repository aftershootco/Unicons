import { Meta, Story } from '@storybook/react'
import React from 'react'
import { MidIcon } from '..'

export default {
	title: 'component/MidIcon',
	component: MidIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <MidIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

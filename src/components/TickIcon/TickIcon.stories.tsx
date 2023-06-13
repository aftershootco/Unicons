import { Meta, Story } from '@storybook/react'
import React from 'react'
import { TickIcon } from '..'

export default {
	title: 'component/TickIcon',
	component: TickIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <TickIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

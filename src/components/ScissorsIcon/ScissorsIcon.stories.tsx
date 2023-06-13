import { Meta, Story } from '@storybook/react'
import React from 'react'
import { ScissorsIcon } from '..'

export default {
	title: 'component/ScissorsIcon',
	component: ScissorsIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <ScissorsIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

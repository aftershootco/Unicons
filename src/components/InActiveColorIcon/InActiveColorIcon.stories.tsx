import { Meta, Story } from '@storybook/react'
import React from 'react'
import { InActiveColorIcon } from '..'

export default {
	title: 'component/InActiveColorIcon',
	component: InActiveColorIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <InActiveColorIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

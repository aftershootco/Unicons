import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Rotata90Icon } from '..'

export default {
	title: 'component/Rotata90Icon',
	component: Rotata90Icon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <Rotata90Icon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

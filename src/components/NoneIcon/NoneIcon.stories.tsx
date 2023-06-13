import { Meta, Story } from '@storybook/react'
import React from 'react'
import { NoneIcon } from '..'

export default {
	title: 'component/NoneIcon',
	component: NoneIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <NoneIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

import { Meta, Story } from '@storybook/react'
import React from 'react'
import { RelinkIcon } from '..'

export default {
	title: 'component/RelinkIcon',
	component: RelinkIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <RelinkIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

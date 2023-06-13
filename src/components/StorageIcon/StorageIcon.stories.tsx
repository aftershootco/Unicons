import { Meta, Story } from '@storybook/react'
import React from 'react'
import { StorageIcon } from '..'

export default {
	title: 'component/StorageIcon',
	component: StorageIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <StorageIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

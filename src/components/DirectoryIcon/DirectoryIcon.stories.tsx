import { Meta, Story } from '@storybook/react'
import React from 'react'
import { DirectoryIcon } from '..'

export default {
	title: 'component/DirectoryIcon',
	component: DirectoryIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <DirectoryIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

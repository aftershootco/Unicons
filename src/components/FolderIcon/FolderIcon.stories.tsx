import { Meta, Story } from '@storybook/react'
import React from 'react'
import { FolderIcon } from '..'

export default {
	title: 'component/FolderIcon',
	component: FolderIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <FolderIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

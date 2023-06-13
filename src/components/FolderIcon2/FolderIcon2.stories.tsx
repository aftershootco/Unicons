import { Meta, Story } from '@storybook/react'
import React from 'react'
import { FolderIcon2 } from '..'

export default {
	title: 'component/FolderIcon2',
	component: FolderIcon2,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <FolderIcon2 {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

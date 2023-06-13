import { Meta, Story } from '@storybook/react'
import React from 'react'
import { AddFolderIcon } from '..'

export default {
	title: 'component/AddFolderIcon',
	component: AddFolderIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <AddFolderIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

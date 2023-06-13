import { Meta, Story } from '@storybook/react'
import React from 'react'
import { UploadFolder } from '..'

export default {
	title: 'component/UploadFolder',
	component: UploadFolder,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <UploadFolder {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

import { Meta, Story } from '@storybook/react'
import React from 'react'
import { UploadIcon } from '..'

export default {
	title: 'component/UploadIcon',
	component: UploadIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <UploadIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

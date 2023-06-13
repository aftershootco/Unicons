import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Upload_Icon } from '..'

export default {
	title: 'component/Upload_Icon',
	component: Upload_Icon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <Upload_Icon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

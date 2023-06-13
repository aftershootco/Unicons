import { Meta, Story } from '@storybook/react'
import React from 'react'
import { ExportIcon } from '..'

export default {
	title: 'component/ExportIcon',
	component: ExportIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <ExportIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

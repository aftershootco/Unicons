import { Meta, Story } from '@storybook/react'
import React from 'react'
import { ExportedIcon } from '..'

export default {
	title: 'component/ExportedIcon',
	component: ExportedIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <ExportedIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

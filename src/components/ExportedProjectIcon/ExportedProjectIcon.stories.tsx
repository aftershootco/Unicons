import { Meta, Story } from '@storybook/react'
import React from 'react'
import { ExportedProjectIcon } from '..'

export default {
	title: 'component/ExportedProjectIcon',
	component: ExportedProjectIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <ExportedProjectIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

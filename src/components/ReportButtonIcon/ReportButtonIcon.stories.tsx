import { Meta, Story } from '@storybook/react'
import React from 'react'
import { ReportButtonIcon } from '..'

export default {
	title: 'component/ReportButtonIcon',
	component: ReportButtonIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <ReportButtonIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

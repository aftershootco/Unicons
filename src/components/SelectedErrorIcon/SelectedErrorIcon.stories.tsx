import { Meta, Story } from '@storybook/react'
import React from 'react'
import { SelectedErrorIcon } from '..'

export default {
	title: 'component/SelectedErrorIcon',
	component: SelectedErrorIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <SelectedErrorIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

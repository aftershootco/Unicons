import { Meta, Story } from '@storybook/react'
import React from 'react'
import { ClearIcon } from '..'

export default {
	title: 'component/ClearIcon',
	component: ClearIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <ClearIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

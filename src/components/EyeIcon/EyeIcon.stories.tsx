import { Meta, Story } from '@storybook/react'
import React from 'react'
import { EyeIcon } from '..'

export default {
	title: 'component/EyeIcon',
	component: EyeIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <EyeIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

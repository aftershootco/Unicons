import { Meta, Story } from '@storybook/react'
import React from 'react'
import { EyeCheckIcon } from '..'

export default {
	title: 'component/EyeCheckIcon',
	component: EyeCheckIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <EyeCheckIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

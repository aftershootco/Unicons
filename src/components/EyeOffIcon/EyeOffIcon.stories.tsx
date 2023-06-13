import { Meta, Story } from '@storybook/react'
import React from 'react'
import { EyeOffIcon } from '..'

export default {
	title: 'component/EyeOffIcon',
	component: EyeOffIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <EyeOffIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

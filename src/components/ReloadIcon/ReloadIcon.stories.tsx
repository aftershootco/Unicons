import { Meta, Story } from '@storybook/react'
import React from 'react'
import { ReloadIcon } from '..'

export default {
	title: 'component/ReloadIcon',
	component: ReloadIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <ReloadIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

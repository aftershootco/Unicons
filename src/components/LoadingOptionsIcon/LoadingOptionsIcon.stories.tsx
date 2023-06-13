import { Meta, Story } from '@storybook/react'
import React from 'react'
import { LoadingOptionsIcon } from '..'

export default {
	title: 'component/LoadingOptionsIcon',
	component: LoadingOptionsIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <LoadingOptionsIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

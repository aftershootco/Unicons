import { Meta, Story } from '@storybook/react'
import React from 'react'
import { ZoomIcon } from '..'

export default {
	title: 'component/ZoomIcon',
	component: ZoomIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <ZoomIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

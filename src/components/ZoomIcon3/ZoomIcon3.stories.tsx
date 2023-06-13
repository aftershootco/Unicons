import { Meta, Story } from '@storybook/react'
import React from 'react'
import { ZoomIcon3 } from '..'

export default {
	title: 'component/ZoomIcon3',
	component: ZoomIcon3,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <ZoomIcon3 {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

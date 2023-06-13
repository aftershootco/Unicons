import { Meta, Story } from '@storybook/react'
import React from 'react'
import { MaximizeIcon2 } from '..'

export default {
	title: 'component/MaximizeIcon2',
	component: MaximizeIcon2,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <MaximizeIcon2 {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

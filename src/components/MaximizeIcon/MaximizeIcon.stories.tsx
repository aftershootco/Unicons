import { Meta, Story } from '@storybook/react'
import React from 'react'
import { MaximizeIcon } from '..'

export default {
	title: 'component/MaximizeIcon',
	component: MaximizeIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <MaximizeIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

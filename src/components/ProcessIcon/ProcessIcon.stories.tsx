import { Meta, Story } from '@storybook/react'
import React from 'react'
import { ProcessIcon } from '..'

export default {
	title: 'component/ProcessIcon',
	component: ProcessIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <ProcessIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

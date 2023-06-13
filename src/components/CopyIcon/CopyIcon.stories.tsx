import { Meta, Story } from '@storybook/react'
import React from 'react'
import { CopyIcon } from '..'

export default {
	title: 'component/CopyIcon',
	component: CopyIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <CopyIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

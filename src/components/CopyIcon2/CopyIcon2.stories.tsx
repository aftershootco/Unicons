import { Meta, Story } from '@storybook/react'
import React from 'react'
import { CopyIcon2 } from '..'

export default {
	title: 'component/CopyIcon2',
	component: CopyIcon2,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <CopyIcon2 {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

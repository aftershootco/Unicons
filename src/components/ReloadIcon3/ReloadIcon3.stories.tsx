import { Meta, Story } from '@storybook/react'
import React from 'react'
import { ReloadIcon3 } from '..'

export default {
	title: 'component/ReloadIcon3',
	component: ReloadIcon3,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <ReloadIcon3 {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

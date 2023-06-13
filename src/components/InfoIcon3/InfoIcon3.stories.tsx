import { Meta, Story } from '@storybook/react'
import React from 'react'
import { InfoIcon3 } from '..'

export default {
	title: 'component/InfoIcon3',
	component: InfoIcon3,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <InfoIcon3 {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

import { Meta, Story } from '@storybook/react'
import React from 'react'
import { InfoIcon } from '..'

export default {
	title: 'component/InfoIcon',
	component: InfoIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <InfoIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

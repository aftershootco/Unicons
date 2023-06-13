import { Meta, Story } from '@storybook/react'
import React from 'react'
import { OpenLinkIcon } from '..'

export default {
	title: 'component/OpenLinkIcon',
	component: OpenLinkIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <OpenLinkIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

import { Meta, Story } from '@storybook/react'
import React from 'react'
import { ShareIcon } from '..'

export default {
	title: 'component/ShareIcon',
	component: ShareIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <ShareIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

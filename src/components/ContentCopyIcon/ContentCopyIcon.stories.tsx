import { Meta, Story } from '@storybook/react'
import React from 'react'
import { ContentCopyIcon } from '..'

export default {
	title: 'component/ContentCopyIcon',
	component: ContentCopyIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <ContentCopyIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

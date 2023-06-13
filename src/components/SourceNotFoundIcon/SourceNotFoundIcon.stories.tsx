import { Meta, Story } from '@storybook/react'
import React from 'react'
import { SourceNotFoundIcon } from '..'

export default {
	title: 'component/SourceNotFoundIcon',
	component: SourceNotFoundIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <SourceNotFoundIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

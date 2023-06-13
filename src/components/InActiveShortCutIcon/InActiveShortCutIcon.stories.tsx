import { Meta, Story } from '@storybook/react'
import React from 'react'
import { InActiveShortCutIcon } from '..'

export default {
	title: 'component/InActiveShortCutIcon',
	component: InActiveShortCutIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <InActiveShortCutIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

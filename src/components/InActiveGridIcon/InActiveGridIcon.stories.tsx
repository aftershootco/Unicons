import { Meta, Story } from '@storybook/react'
import React from 'react'
import { InActiveGridIcon } from '..'

export default {
	title: 'component/InActiveGridIcon',
	component: InActiveGridIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <InActiveGridIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

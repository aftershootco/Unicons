import { Meta, Story } from '@storybook/react'
import React from 'react'
import { InactiveLoupeIcon } from '..'

export default {
	title: 'component/InactiveLoupeIcon',
	component: InactiveLoupeIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <InactiveLoupeIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

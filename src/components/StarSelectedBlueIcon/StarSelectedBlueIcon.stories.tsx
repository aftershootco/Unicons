import { Meta, Story } from '@storybook/react'
import React from 'react'
import { StarSelectedBlueIcon } from '..'

export default {
	title: 'component/StarSelectedBlueIcon',
	component: StarSelectedBlueIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <StarSelectedBlueIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

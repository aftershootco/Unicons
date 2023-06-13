import { Meta, Story } from '@storybook/react'
import React from 'react'
import { HighIcon } from '..'

export default {
	title: 'component/HighIcon',
	component: HighIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <HighIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

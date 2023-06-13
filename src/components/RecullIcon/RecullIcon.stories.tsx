import { Meta, Story } from '@storybook/react'
import React from 'react'
import { RecullIcon } from '..'

export default {
	title: 'component/RecullIcon',
	component: RecullIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <RecullIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

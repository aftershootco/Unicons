import { Meta, Story } from '@storybook/react'
import React from 'react'
import { FriendsIcon } from '..'

export default {
	title: 'component/FriendsIcon',
	component: FriendsIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <FriendsIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

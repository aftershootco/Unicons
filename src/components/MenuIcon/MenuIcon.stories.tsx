import { Meta, Story } from '@storybook/react'
import React from 'react'
import { MenuIcon } from '..'

export default {
	title: 'component/MenuIcon',
	component: MenuIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <MenuIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

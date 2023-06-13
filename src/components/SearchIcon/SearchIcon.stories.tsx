import { Meta, Story } from '@storybook/react'
import React from 'react'
import { SearchIcon } from '..'

export default {
	title: 'component/SearchIcon',
	component: SearchIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <SearchIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

import { Meta, Story } from '@storybook/react'
import React from 'react'
import { InActiveSortIcon } from '..'

export default {
	title: 'component/InActiveSortIcon',
	component: InActiveSortIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <InActiveSortIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

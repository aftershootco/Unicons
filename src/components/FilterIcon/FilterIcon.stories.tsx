import { Meta, Story } from '@storybook/react'
import React from 'react'
import { FilterIcon } from '..'

export default {
	title: 'component/FilterIcon',
	component: FilterIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <FilterIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

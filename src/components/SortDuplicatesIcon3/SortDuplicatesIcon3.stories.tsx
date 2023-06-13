import { Meta, Story } from '@storybook/react'
import React from 'react'
import { SortDuplicatesIcon3 } from '..'

export default {
	title: 'component/SortDuplicatesIcon3',
	component: SortDuplicatesIcon3,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <SortDuplicatesIcon3 {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

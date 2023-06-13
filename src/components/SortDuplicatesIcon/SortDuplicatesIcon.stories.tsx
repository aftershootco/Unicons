import { Meta, Story } from '@storybook/react'
import React from 'react'
import { SortDuplicatesIcon } from '..'

export default {
	title: 'component/SortDuplicatesIcon',
	component: SortDuplicatesIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <SortDuplicatesIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

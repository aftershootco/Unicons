import { Meta, Story } from '@storybook/react'
import React from 'react'
import { EmptyStarIcon } from '..'

export default {
	title: 'component/EmptyStarIcon',
	component: EmptyStarIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <EmptyStarIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

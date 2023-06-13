import { Meta, Story } from '@storybook/react'
import React from 'react'
import { FilledStarIcon } from '..'

export default {
	title: 'component/FilledStarIcon',
	component: FilledStarIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <FilledStarIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }
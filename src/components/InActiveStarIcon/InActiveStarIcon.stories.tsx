import { Meta, Story } from '@storybook/react'
import React from 'react'
import { InActiveStarIcon } from '..'

export default {
	title: 'component/InActiveStarIcon',
	component: InActiveStarIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <InActiveStarIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

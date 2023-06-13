import { Meta, Story } from '@storybook/react'
import React from 'react'
import { StarIcon } from '..'

export default {
	title: 'component/StarIcon',
	component: StarIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <StarIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

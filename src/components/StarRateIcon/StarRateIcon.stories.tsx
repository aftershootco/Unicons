import { Meta, Story } from '@storybook/react'
import React from 'react'
import { StarRateIcon } from '..'

export default {
	title: 'component/StarRateIcon',
	component: StarRateIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <StarRateIcon {...args} />

const Default = Template.bind({})
Default.args = {
	fill: '',
}

export { Default }

import { Meta, Story } from '@storybook/react'
import React from 'react'
import { TrainFailIcon } from '..'

export default {
	title: 'component/TrainFailIcon',
	component: TrainFailIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <TrainFailIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

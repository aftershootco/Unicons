import { Meta, Story } from '@storybook/react'
import React from 'react'
import { TrainIcon } from '..'

export default {
	title: 'component/TrainIcon',
	component: TrainIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <TrainIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

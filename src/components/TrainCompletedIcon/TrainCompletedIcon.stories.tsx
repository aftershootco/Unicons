import { Meta, Story } from '@storybook/react'
import React from 'react'
import { TrainCompletedIcon } from '..'

export default {
	title: 'component/TrainCompletedIcon',
	component: TrainCompletedIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <TrainCompletedIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

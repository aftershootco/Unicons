import { Meta, Story } from '@storybook/react'
import React from 'react'
import { PlayIcon4 } from '..'

export default {
	title: 'component/PlayIcon4',
	component: PlayIcon4,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <PlayIcon4 {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

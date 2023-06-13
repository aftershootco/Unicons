import { Meta, Story } from '@storybook/react'
import React from 'react'
import { PlayIcon } from '..'

export default {
	title: 'component/PlayIcon',
	component: PlayIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <PlayIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

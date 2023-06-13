import { Meta, Story } from '@storybook/react'
import React from 'react'
import { PlayerIcon } from '..'

export default {
	title: 'component/PlayerIcon',
	component: PlayerIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <PlayerIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

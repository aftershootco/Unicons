import { Meta, Story } from '@storybook/react'
import React from 'react'
import { UnmaximizeIcon } from '..'

export default {
	title: 'component/UnmaximizeIcon',
	component: UnmaximizeIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <UnmaximizeIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

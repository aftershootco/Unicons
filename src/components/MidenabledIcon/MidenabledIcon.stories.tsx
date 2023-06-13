import { Meta, Story } from '@storybook/react'
import React from 'react'
import { MidenabledIcon } from '..'

export default {
	title: 'component/MidenabledIcon',
	component: MidenabledIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <MidenabledIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

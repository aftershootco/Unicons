import { Meta, Story } from '@storybook/react'
import React from 'react'
import { OptionCompletedIcon } from '..'

export default {
	title: 'component/OptionCompletedIcon',
	component: OptionCompletedIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <OptionCompletedIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

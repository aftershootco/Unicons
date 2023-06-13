import { Meta, Story } from '@storybook/react'
import React from 'react'
import { RightArrowIcon } from '..'

export default {
	title: 'component/RightArrowIcon',
	component: RightArrowIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <RightArrowIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

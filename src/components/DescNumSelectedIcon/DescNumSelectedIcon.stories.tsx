import { Meta, Story } from '@storybook/react'
import React from 'react'
import { DescNumSelectedIcon } from '..'

export default {
	title: 'component/DescNumSelectedIcon',
	component: DescNumSelectedIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <DescNumSelectedIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

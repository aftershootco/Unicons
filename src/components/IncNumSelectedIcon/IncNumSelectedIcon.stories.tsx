import { Meta, Story } from '@storybook/react'
import React from 'react'
import { IncNumSelectedIcon } from '..'

export default {
	title: 'component/IncNumSelectedIcon',
	component: IncNumSelectedIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <IncNumSelectedIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

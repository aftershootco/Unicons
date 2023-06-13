import { Meta, Story } from '@storybook/react'
import React from 'react'
import { ExitAppIcon } from '..'

export default {
	title: 'component/ExitAppIcon',
	component: ExitAppIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <ExitAppIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

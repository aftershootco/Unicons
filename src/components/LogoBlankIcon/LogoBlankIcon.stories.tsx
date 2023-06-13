import { Meta, Story } from '@storybook/react'
import React from 'react'
import { LogoBlankIcon } from '..'

export default {
	title: 'component/LogoBlankIcon',
	component: LogoBlankIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <LogoBlankIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

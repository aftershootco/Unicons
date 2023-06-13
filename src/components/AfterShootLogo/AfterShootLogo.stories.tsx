import { Meta, Story } from '@storybook/react'
import React from 'react'
import { AfterShootLogo } from '..'

export default {
	title: 'component/AfterShootLogo',
	component: AfterShootLogo,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <AfterShootLogo {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

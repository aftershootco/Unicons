import { Meta, Story } from '@storybook/react'
import React from 'react'
import { KeyDupVisIcon } from '..'

export default {
	title: 'component/KeyDupVisIcon',
	component: KeyDupVisIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <KeyDupVisIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

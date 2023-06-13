import { Meta, Story } from '@storybook/react'
import React from 'react'
import { KeyFacesUnselectedIcon } from '..'

export default {
	title: 'component/KeyFacesUnselectedIcon',
	component: KeyFacesUnselectedIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <KeyFacesUnselectedIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

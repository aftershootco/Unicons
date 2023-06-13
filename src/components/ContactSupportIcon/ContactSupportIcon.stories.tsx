import { Meta, Story } from '@storybook/react'
import React from 'react'
import { ContactSupportIcon } from '..'

export default {
	title: 'component/ContactSupportIcon',
	component: ContactSupportIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <ContactSupportIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

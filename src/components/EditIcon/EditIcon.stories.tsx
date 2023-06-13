import { Meta, Story } from '@storybook/react'
import React from 'react'
import { EditIcon } from '..'

export default {
	title: 'component/EditIcon',
	component: EditIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <EditIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

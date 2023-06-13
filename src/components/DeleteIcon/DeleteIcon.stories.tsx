import { Meta, Story } from '@storybook/react'
import React from 'react'
import { DeleteIcon } from '..'

export default {
	title: 'component/DeleteIcon',
	component: DeleteIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <DeleteIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

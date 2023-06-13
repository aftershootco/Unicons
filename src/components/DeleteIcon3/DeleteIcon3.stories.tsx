import { Meta, Story } from '@storybook/react'
import React from 'react'
import { DeleteIcon3 } from '..'

export default {
	title: 'component/DeleteIcon3',
	component: DeleteIcon3,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <DeleteIcon3 {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

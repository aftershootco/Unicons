import { Meta, Story } from '@storybook/react'
import React from 'react'
import { DeleteWhiteIcon4 } from '..'

export default {
	title: 'component/DeleteWhiteIcon4',
	component: DeleteWhiteIcon4,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <DeleteWhiteIcon4 {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

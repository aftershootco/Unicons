import { Meta, Story } from '@storybook/react'
import React from 'react'
import { DeleteWhiteIcon } from '..'

export default {
	title: 'component/DeleteWhiteIcon',
	component: DeleteWhiteIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <DeleteWhiteIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

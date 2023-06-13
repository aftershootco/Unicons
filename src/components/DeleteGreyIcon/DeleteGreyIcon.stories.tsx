import { Meta, Story } from '@storybook/react'
import React from 'react'
import { DeleteGreyIcon } from '..'

export default {
	title: 'component/DeleteGreyIcon',
	component: DeleteGreyIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <DeleteGreyIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

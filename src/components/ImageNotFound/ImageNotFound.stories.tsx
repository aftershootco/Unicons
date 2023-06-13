import { Meta, Story } from '@storybook/react'
import React from 'react'
import { ImageNotFound } from '..'

export default {
	title: 'component/ImageNotFound',
	component: ImageNotFound,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <ImageNotFound {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

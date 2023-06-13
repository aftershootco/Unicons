import { Meta, Story } from '@storybook/react'
import React from 'react'
import { ImageNotFoundIcon } from '..'

export default {
	title: 'component/ImageNotFoundIcon',
	component: ImageNotFoundIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <ImageNotFoundIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

import { Meta, Story } from '@storybook/react'
import React from 'react'
import { ImageBorderSoftIcon } from '..'

export default {
	title: 'component/ImageBorderSoftIcon',
	component: ImageBorderSoftIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <ImageBorderSoftIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

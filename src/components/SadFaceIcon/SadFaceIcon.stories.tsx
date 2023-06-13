import { Meta, Story } from '@storybook/react'
import React from 'react'
import { SadFaceIcon } from '..'

export default {
	title: 'component/SadFaceIcon',
	component: SadFaceIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <SadFaceIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

import { Meta, Story } from '@storybook/react'
import React from 'react'
import { UploadsIcon } from '..'

export default {
	title: 'component/UploadsIcon',
	component: UploadsIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <UploadsIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

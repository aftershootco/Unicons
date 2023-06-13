import { Meta, Story } from '@storybook/react'
import React from 'react'
import { EditPhotoIcon } from '..'

export default {
	title: 'component/EditPhotoIcon',
	component: EditPhotoIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <EditPhotoIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

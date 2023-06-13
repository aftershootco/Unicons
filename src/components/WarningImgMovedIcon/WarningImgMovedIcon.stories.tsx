import { Meta, Story } from '@storybook/react'
import React from 'react'
import { WarningImgMovedIcon } from '..'

export default {
	title: 'component/WarningImgMovedIcon',
	component: WarningImgMovedIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <WarningImgMovedIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

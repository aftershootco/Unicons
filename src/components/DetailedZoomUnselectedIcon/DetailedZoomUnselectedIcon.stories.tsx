import { Meta, Story } from '@storybook/react'
import React from 'react'
import { DetailedZoomUnselectedIcon } from '..'

export default {
	title: 'component/DetailedZoomUnselectedIcon',
	component: DetailedZoomUnselectedIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <DetailedZoomUnselectedIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

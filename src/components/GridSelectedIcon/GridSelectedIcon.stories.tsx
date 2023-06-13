import { Meta, Story } from '@storybook/react'
import React from 'react'
import { GridSelectedIcon } from '..'

export default {
	title: 'component/GridSelectedIcon',
	component: GridSelectedIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <GridSelectedIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

import { Meta, Story } from '@storybook/react'
import React from 'react'
import { GridViewIcon } from '..'

export default {
	title: 'component/GridViewIcon',
	component: GridViewIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <GridViewIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

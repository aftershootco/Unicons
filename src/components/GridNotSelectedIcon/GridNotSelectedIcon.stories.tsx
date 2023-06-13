import { Meta, Story } from '@storybook/react'
import React from 'react'
import { GridNotSelectedIcon } from '..'

export default {
	title: 'component/GridNotSelectedIcon',
	component: GridNotSelectedIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <GridNotSelectedIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

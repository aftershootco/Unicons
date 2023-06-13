import { Meta, Story } from '@storybook/react'
import React from 'react'
import { GridNotSelectedIcon3 } from '..'

export default {
	title: 'component/GridNotSelectedIcon3',
	component: GridNotSelectedIcon3,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <GridNotSelectedIcon3 {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

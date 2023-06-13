import { Meta, Story } from '@storybook/react'
import React from 'react'
import { GridOfFourIcon } from '..'

export default {
	title: 'component/GridOfFourIcon',
	component: GridOfFourIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <GridOfFourIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

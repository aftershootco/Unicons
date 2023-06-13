import { Meta, Story } from '@storybook/react'
import React from 'react'
import { DiamondIcon } from '..'

export default {
	title: 'component/DiamondIcon',
	component: DiamondIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <DiamondIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

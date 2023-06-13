import { Meta, Story } from '@storybook/react'
import React from 'react'
import { GridOfFourActiveIcon } from '..'

export default {
	title: 'component/GridOfFourActiveIcon',
	component: GridOfFourActiveIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <GridOfFourActiveIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

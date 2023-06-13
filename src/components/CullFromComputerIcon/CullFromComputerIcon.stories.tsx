import { Meta, Story } from '@storybook/react'
import React from 'react'
import { CullFromComputerIcon } from '..'

export default {
	title: 'component/CullFromComputerIcon',
	component: CullFromComputerIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <CullFromComputerIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

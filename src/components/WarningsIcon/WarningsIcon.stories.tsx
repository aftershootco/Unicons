import { Meta, Story } from '@storybook/react'
import React from 'react'
import { WarningsIcon } from '..'

export default {
	title: 'component/WarningsIcon',
	component: WarningsIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <WarningsIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

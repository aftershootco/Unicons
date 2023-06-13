import { Meta, Story } from '@storybook/react'
import React from 'react'
import { SprayClickIcon3 } from '..'

export default {
	title: 'component/SprayClickIcon3',
	component: SprayClickIcon3,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <SprayClickIcon3 {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

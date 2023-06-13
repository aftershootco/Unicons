import { Meta, Story } from '@storybook/react'
import React from 'react'
import { SprayClickIcon } from '..'

export default {
	title: 'component/SprayClickIcon',
	component: SprayClickIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <SprayClickIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

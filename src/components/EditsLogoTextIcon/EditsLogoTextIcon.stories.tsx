import { Meta, Story } from '@storybook/react'
import React from 'react'
import { EditsLogoTextIcon } from '..'

export default {
	title: 'component/EditsLogoTextIcon',
	component: EditsLogoTextIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <EditsLogoTextIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

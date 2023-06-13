import { Meta, Story } from '@storybook/react'
import React from 'react'
import { AftershootEditsIcon } from '..'

export default {
	title: 'component/AftershootEditsIcon',
	component: AftershootEditsIcon,
} as Meta

const Template: Story<React.SVGProps<SVGSVGElement>> = (args: React.HtmlHTMLAttributes<any>) => <AftershootEditsIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

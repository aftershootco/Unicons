import { Meta, Story } from '@storybook/react'
import React from 'react'
import { CullFromCardIcon } from '..'

export default {
	title: 'component/CullFromCardIcon',
	component: CullFromCardIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <CullFromCardIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }


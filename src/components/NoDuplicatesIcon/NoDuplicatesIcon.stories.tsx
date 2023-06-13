import { Meta, Story } from '@storybook/react'
import React from 'react'
import { NoDuplicatesIcon } from '..'

export default {
	title: 'component/NoDuplicatesIcon',
	component: NoDuplicatesIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <NoDuplicatesIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

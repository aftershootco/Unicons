import { Meta, Story } from '@storybook/react'
import React from 'react'
import { ShowDuplicateIcon } from '..'

export default {
	title: 'component/ShowDuplicateIcon',
	component: ShowDuplicateIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <ShowDuplicateIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

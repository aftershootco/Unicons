import { Meta, Story } from '@storybook/react'
import React from 'react'
import { InfoRoundedIcon3 } from '..'

export default {
	title: 'component/InfoRoundedIcon3',
	component: InfoRoundedIcon3,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <InfoRoundedIcon3 {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

import { Meta, Story } from '@storybook/react'
import React from 'react'
import { InfoRoundedIcon } from '..'

export default {
	title: 'component/InfoRoundedIcon',
	component: InfoRoundedIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <InfoRoundedIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

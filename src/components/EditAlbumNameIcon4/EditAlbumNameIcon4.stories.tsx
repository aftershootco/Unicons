import { Meta, Story } from '@storybook/react'
import React from 'react'
import { EditAlbumNameIcon4 } from '..'

export default {
	title: 'component/EditAlbumNameIcon4',
	component: EditAlbumNameIcon4,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <EditAlbumNameIcon4 {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

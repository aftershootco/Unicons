import { Meta, Story } from '@storybook/react'
import React from 'react'
import { EditAlbumNameIcon } from '..'

export default {
	title: 'component/EditAlbumNameIcon',
	component: EditAlbumNameIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <EditAlbumNameIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }

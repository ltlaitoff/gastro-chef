import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Logo from './Logo'

export default {
	title: 'Logo',
	component: Logo,

	argTypes: {
		type: ['normal', 'big'],
		link: true
	}
}
const Template = args => (
	<BrowserRouter>
		<Logo {...args} />
	</BrowserRouter>
)

export const Normal = Template.bind({})
Normal.args = {
	type: 'normal'
}

export const Big = Template.bind({})
Big.args = {
	type: 'big'
}

export const LinkIsFalse = Template.bind({})
Big.args = {
	link: false
}

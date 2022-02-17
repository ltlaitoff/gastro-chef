import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Menu from './Menu'

export default {
	title: 'Menu',
	component: Menu
}
const Template = args => (
	<BrowserRouter>
		<Menu {...args} />
	</BrowserRouter>
)

export const Standart = Template.bind({})

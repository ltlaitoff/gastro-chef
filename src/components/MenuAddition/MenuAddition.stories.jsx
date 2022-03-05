import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import MenuAddition from './MenuAddition'

export default {
	title: 'MenuAddition',
	component: MenuAddition
}
const Template = args => (
	<BrowserRouter>
		<MenuAddition {...args} />
	</BrowserRouter>
)

export const Normal = Template.bind({})
Normal.args = {
	type: 'normal'
}

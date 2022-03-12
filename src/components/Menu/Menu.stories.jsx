import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Menu from './Menu'

import rootReducer from 'store/resucers'

const store = createStore(rootReducer)

export default {
	title: 'Menu',
	component: Menu
}
const Template = args => (
	<Provider store={store}>
		<BrowserRouter>
			<Menu {...args} />
		</BrowserRouter>
	</Provider>
)

export const Standart = Template.bind({})

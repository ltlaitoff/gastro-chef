import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import MenuAddition from './MenuAddition'

import rootReducer from 'store/resucers'

const store = createStore(rootReducer)

export default {
	title: 'MenuAddition',
	component: MenuAddition
}
const Template = args => (
	<Provider store={store}>
		<BrowserRouter>
			<MenuAddition {...args} />
		</BrowserRouter>
	</Provider>
)

export const Normal = Template.bind({})
Normal.args = {
	type: 'normal'
}

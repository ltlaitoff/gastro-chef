import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Languages from './Languages'
import rootReducer from 'store/resucers'

const store = createStore(rootReducer)

export default {
	title: 'Languages',
	component: Languages
}

const Template = args => (
	<Provider store={store}>
		<Languages {...args} />
	</Provider>
)

export const Standart = Template.bind({})

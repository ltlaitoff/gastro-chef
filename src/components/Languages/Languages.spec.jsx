import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import Languages from './Languages'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'

const LANGUAGES_LIST = [
	{
		id: 0,
		code: 'ru'
	},
	{
		id: 1,
		code: 'ua'
	},
	{
		id: 2,
		code: 'en'
	}
]

describe('Languages.jsx', () => {
	let store
	const initialState = {
		language: 'ru'
	}
	const mockStore = configureStore()

	beforeEach(() => {
		store = mockStore(initialState)
		render(
			<Provider store={store}>
				<Languages />
			</Provider>
		)
	})

	afterEach(() => {
		cleanup()
	})

	it('languages must be in document', () => {
		LANGUAGES_LIST.forEach(language => {
			const button = screen.getByTestId(language.id)
			fireEvent.click(button)
			const actions = store.getActions()

			expect(actions).toEqual([
				{ type: 'SET_LANGUAGE', payload: language.code }
			])

			store.clearActions()
		})
	})
})

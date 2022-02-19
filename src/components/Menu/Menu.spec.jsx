import React from 'react'
import Menu from './Menu'
import '@testing-library/jest-dom'
import { render, screen, cleanup } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'

describe('Menu.jsx', () => {
	let store
	const initialState = {
		language: 'ru'
	}
	const mockStore = configureStore()

	beforeEach(() => {
		store = mockStore(initialState)
		render(
			<Provider store={store}>
				<BrowserRouter>
					<Menu />
				</BrowserRouter>
			</Provider>
		)
	})

	afterEach(() => {
		cleanup()
	})

	it('menu in a document', () => {
		const menu = screen.getByTestId('menu')

		expect(menu).toBeInTheDocument()
	})

	it('all menu items have links', () => {
		const items = screen.getAllByTestId('item')
		const links = screen.getAllByRole('link')

		expect(links).toHaveLength(items.length)
	})
})

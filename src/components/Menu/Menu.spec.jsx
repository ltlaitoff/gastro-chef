import React from 'react'
import Menu from './Menu'
import '@testing-library/jest-dom'
import { render, screen, cleanup } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

describe('Menu.jsx', () => {
	beforeEach(() => {
		render(
			<BrowserRouter>
				<Menu />
			</BrowserRouter>
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

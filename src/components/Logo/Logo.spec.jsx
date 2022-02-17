import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, cleanup } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Logo from './Logo'

describe('Logo.jsx', () => {
	describe('logo without args', () => {
		let wrapper = null

		beforeEach(() => {
			wrapper = render(
				<BrowserRouter>
					<Logo />
				</BrowserRouter>
			)
		})

		afterEach(() => {
			cleanup()
			wrapper = null
		})

		it('logo must be in the document', () => {
			const { container } = wrapper

			expect(container).toBeInTheDocument()
		})

		it('logo img to be in the document', () => {
			const logoImage = screen.getByRole('img')

			expect(logoImage).toBeInTheDocument()
		})

		it('logo img must have alt attribute', () => {
			const logoImage = screen.getByRole('img')

			expect(logoImage).toHaveAttribute('alt')
		})
	})

	it("on link = false component can't have link", () => {
		render(<Logo link={false} />)
		const logoImage = screen.getByTestId('not-link')

		expect(logoImage).toBeInTheDocument()
	})
})

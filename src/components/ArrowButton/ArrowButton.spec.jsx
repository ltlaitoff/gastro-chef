import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'

import ArrowButton from './ArrowButton'

describe('ArrowButton.jsx', () => {
	let wrapper = null
	let onClickFn = jest.fn()
	const testIcon = () => <img src='' alt='' data-testid='icon' />

	beforeEach(() => {
		wrapper = render(
			<ArrowButton
				iconComponent={testIcon}
				onClick={onClickFn}
				data-testid='button'
			/>
		)
	})

	afterEach(() => {
		cleanup()
		wrapper = null
	})

	it('arrowButton must be in the document', () => {
		const { container } = wrapper

		expect(container).toBeInTheDocument()
	})

	it('onClick on button must be called callbackFunction', () => {
		const button = screen.getByTestId('button')
		fireEvent.click(button)

		expect(onClickFn).toBeCalled()
	})

	it('iconComponent must be in button', () => {
		const button = screen.getByTestId('button')
		const icon = button.firstChild

		expect(icon).toBeInTheDocument()
	})
})

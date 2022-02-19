import { languageReducer } from './reducers'

describe('language reducer', () => {
	it('should handle initial state', () => {
		expect(languageReducer(undefined, {})).toEqual({
			language: 'ru'
		})
	})

	it('should handle SET_LANGUAGE', () => {
		expect(
			languageReducer(undefined, { type: 'SET_LANGUAGE', payload: 'en' })
		).toEqual({
			language: 'en'
		})
	})
})

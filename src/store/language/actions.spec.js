import * as actions from './actions'

describe('language actions', () => {
	it('setLanguage should create SET_LANGUAGE action', () => {
		expect(actions.setLanguage('ru')).toEqual({
			type: 'SET_LANGUAGE',
			payload: 'ru'
		})
	})
})

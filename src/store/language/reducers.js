import { DEFAULT_LANGUAGE } from 'data/config'

import { SET_LANGUAGE } from './actions'

const defaultState = {
	language: DEFAULT_LANGUAGE
}

export const languageReducer = (state = defaultState, action) => {
	switch (action.type) {
		case SET_LANGUAGE:
			return {
				...state,
				language: action.payload
			}
	}

	return state
}

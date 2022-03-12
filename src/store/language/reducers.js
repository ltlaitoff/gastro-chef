import { config } from 'data'

import { SET_LANGUAGE } from './actions'

const defaultState = {
	language: config.DEFAULT_LANGUAGE
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

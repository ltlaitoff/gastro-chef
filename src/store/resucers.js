import { combineReducers } from 'redux'
import { languageReducer } from './language/reducers'

export default combineReducers({
	language: languageReducer
})

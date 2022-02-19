import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from 'pages/HomePage.jsx'
import styles from './App.module.scss'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from 'store/resucers'

const store = createStore(rootReducer)

function App() {
	return (
		<div className={styles.app}>
			<Provider store={store}>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<HomePage />} />
					</Routes>
				</BrowserRouter>
			</Provider>
		</div>
	)
}

export default App

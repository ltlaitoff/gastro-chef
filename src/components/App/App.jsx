import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from 'pages/HomePage.jsx'
import styles from './App.module.scss'

function App() {
	return (
		<div className={styles.app}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<HomePage />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App

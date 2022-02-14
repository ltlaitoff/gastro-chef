import React from 'react'
import Logo from 'components/Logo/Logo.jsx'

import styles from './Header.module.scss'

const Header = () => {
	return (
		<div className={styles.header}>
			<Logo />
			<Logo type='big' />
		</div>
	)
}

export default Header

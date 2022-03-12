import React from 'react'

import Menu from 'components/Menu'
import Languages from 'components/Languages'
import HeaderLogo from './components/HeaderLogo'

import styles from './Header.module.scss'

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.headerFistPart}>
				<HeaderLogo />

				<div className={styles.wrapper}>
					<Menu className={styles.menu} />
					<Languages className={styles.languages} />
				</div>
			</div>

			<div className={styles.headerSecondPart}>
				<a href='tel:000' className={styles.phone}>
					+38 (068) 949 - 49 -19
				</a>
			</div>
		</header>
	)
}

export default Header

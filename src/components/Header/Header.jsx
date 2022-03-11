import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Logo from 'components/Logo'
import Menu from 'components/Menu'
import Languages from 'components/Languages'

import styles from './Header.module.scss'

const logoText = {
	ru: 'здоровый рацион',
	ua: 'здоровий раціон',
	en: 'healthy ration'
}

const Header = () => {
	const currentLanguage = useSelector(store => store.language.language)

	return (
		<header className={styles.header}>
			<div className={styles.headerFistPart}>
				<Link to='/' className={styles.logo}>
					<Logo link={false} />
					<div className={styles.logoText}>{logoText[currentLanguage]}</div>
				</Link>

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

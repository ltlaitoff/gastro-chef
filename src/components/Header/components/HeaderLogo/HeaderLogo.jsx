import React from 'react'
import { useSelector } from 'react-redux'
import { header as DATA } from 'data'

import Logo from 'components/Logo'
import { Link } from 'react-router-dom'

import styles from './HeaderLogo.module.scss'

const HeaderLogo = () => {
	const currentLanguage = useSelector(store => store.language.language)

	return (
		<Link to='/' className={styles.logo}>
			<Logo link={false} />
			<div className={styles.logoText}>{DATA.logoText[currentLanguage]}</div>
		</Link>
	)
}

export default HeaderLogo

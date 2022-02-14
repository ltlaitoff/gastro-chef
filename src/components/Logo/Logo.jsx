import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import logoIcon from '../../assets/images/logo.png'

import styles from './Logo.module.scss'

const Logo = ({ type, ...args }) => {
	return (
		<Link
			to='/'
			className={type === 'normal' ? styles.normal : styles.big}
			{...args}
		>
			<img className={styles.image} src={logoIcon} alt='Gastro chaf logo' />
		</Link>
	)
}

Logo.propTypes = {
	type: PropTypes.oneOf(['normal', 'big'])
}

Logo.defaultProps = {
	type: 'normal'
}

export default Logo

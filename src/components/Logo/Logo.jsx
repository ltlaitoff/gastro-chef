import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import logoIcon from '../../assets/images/logo.png'

import styles from './Logo.module.scss'

const Logo = ({ type, link, ...args }) => {
	// const Image = (
	// 	<img className={styles.image} src={logoIcon} alt='Gastro chaf logo' />
	// )

	const className = type === 'normal' ? styles.normal : styles.big

	if (link) {
		return (
			<Link to='/' className={className} {...args} data-testid='link'>
				<img className={styles.image} src={logoIcon} alt='Gastro chaf logo' />
			</Link>
		)
	}
	return (
		<div className={className} {...args} data-testid='not-link'>
			<img className={styles.image} src={logoIcon} alt='Gastro chaf logo' />
		</div>
	)
}

Logo.propTypes = {
	type: PropTypes.oneOf(['normal', 'big']),
	link: PropTypes.bool
}

Logo.defaultProps = {
	type: 'normal',
	link: true
}

export default Logo

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import logoIcon from '../../assets/images/logo.png'

import styles from './Logo.module.scss'
import classNames from 'classnames'

const Logo = ({ type, link, className, ...args }) => {
	const classes = classNames(
		type === 'normal' ? styles.normal : styles.big,
		className
	)

	if (link) {
		return (
			<Link to='/' className={classes} {...args} data-testid='link'>
				<img className={styles.image} src={logoIcon} alt='Gastro chaf logo' />
			</Link>
		)
	}
	return (
		<div className={classes} {...args} data-testid='not-link'>
			<img className={styles.image} src={logoIcon} alt='Gastro chaf logo' />
		</div>
	)
}

Logo.propTypes = {
	type: PropTypes.oneOf(['normal', 'big']),
	link: PropTypes.bool,
	className: PropTypes.string
}

Logo.defaultProps = {
	type: 'normal',
	link: true,
	className: ''
}

export default Logo

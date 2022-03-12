import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import styles from './ArrowButton.module.scss'

const ArrowButton = ({
	iconComponent: IconComponent,
	onClick,
	className,
	iconClassName,
	...args
}) => {
	return (
		<button
			className={classNames(styles.button, className)}
			onClick={onClick}
			{...args}
		>
			<IconComponent className={classNames(styles.icon, iconClassName)} />
		</button>
	)
}

ArrowButton.propTypes = {
	iconComponent: PropTypes.any,
	onClick: PropTypes.func,
	className: PropTypes.string,
	iconClassName: PropTypes.string
}

ArrowButton.defaultProps = {
	className: '',
	iconClassName: ''
}

export default ArrowButton

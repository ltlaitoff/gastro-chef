import React from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as LeftArrowIcon } from 'assets/images/favicons/arrowLeft.svg'

import ArrowButton from './ArrowButton'

const LeftArrowButton = ({ onClick, className, iconClassName, ...args }) => {
	return (
		<ArrowButton
			iconComponent={LeftArrowIcon}
			onClick={onClick}
			className={className}
			iconClassName={iconClassName}
			{...args}
		/>
	)
}

LeftArrowButton.propTypes = {
	onClick: PropTypes.func,
	className: PropTypes.string,
	iconClassName: PropTypes.string
}

LeftArrowButton.defaultProps = {
	className: '',
	iconClassName: ''
}

export default LeftArrowButton

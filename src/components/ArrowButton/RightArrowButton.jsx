import React from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as RightArrowIcon } from 'assets/images/favicons/arrowRight.svg'

import ArrowButton from './ArrowButton'

const RightArrowButton = ({ onClick, className, iconClassName, ...args }) => {
	return (
		<ArrowButton
			iconComponent={RightArrowIcon}
			onClick={onClick}
			className={className}
			iconClassName={iconClassName}
			{...args}
		/>
	)
}

RightArrowButton.propTypes = {
	onClick: PropTypes.func,
	className: PropTypes.string,
	iconClassName: PropTypes.string
}

RightArrowButton.defaultProps = {
	className: '',
	iconClassName: ''
}

export default RightArrowButton

import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import styles from './MainPromoImage.module.scss'

const MainPromoImage = ({ imageName }) => {
	const [image, setImage] = useState('')

	useEffect(() => {
		if (imageName) {
			import(`../../../../assets/images/promo-slide-${imageName}.png`).then(
				image => {
					setImage(image.default)
				}
			)
		}
	}, [])

	return (
		<div className={styles.wrapper}>
			<img src={image} alt={imageName} className={styles.image} />
		</div>
	)
}

MainPromoImage.propTypes = {
	imageName: PropTypes.string.isRequired
}

export default MainPromoImage

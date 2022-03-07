/* eslint-disable */
import React, { useState } from 'react'

import styles from './MainPromo.module.scss'
import DATA from './data.js'
import MenuAddition from 'components/MenuAddition'
import MainPromoContent from './components/MainPromoContent'

const MainPromo = () => {
	const [currentSlideId, setCurrentSlideId] = useState(0)

	const currentSlide = DATA.filter(slide => slide.id === currentSlideId)[0]

	return (
		<section className={styles.promo}>
			<div className={styles.wrapper}>
				<MenuAddition />
				<MainPromoContent slideData={currentSlide} />

				<div className={styles.photo}>
					{/* <img src={imageSrc} alt='' className={styles.photoImage} /> */}
				</div>
			</div>

			<div className={styles.dots}></div>
		</section>
	)
}

export default MainPromo

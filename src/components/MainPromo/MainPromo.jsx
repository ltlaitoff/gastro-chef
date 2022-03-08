/* eslint-disable */
import React, { useState } from 'react'

import Header from 'components/Header'
import MenuAddition from 'components/MenuAddition'
import MainPromoContent from './components/MainPromoContent'
import MainPromoImage from './components/MainPromoImage'

import styles from './MainPromo.module.scss'
import DATA from './data.js'

const MainPromo = () => {
	const [currentSlideId, setCurrentSlideId] = useState(0)

	const currentSlide = DATA.filter(slide => slide.id === currentSlideId)[0]

	return (
		<section className={styles.promo}>
			<Header />
			<div className={styles.wrapper}>
				<MenuAddition />
				<MainPromoContent slideData={currentSlide} />
				<MainPromoImage imageName={currentSlide.imageName} />
			</div>

			<div className={styles.dots}></div>
		</section>
	)
}

export default MainPromo

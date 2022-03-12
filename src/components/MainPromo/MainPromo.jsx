import React, { useState } from 'react'
import classNames from 'classnames'
import { useKeenSlider } from 'keen-slider/react'

import Header from 'components/Header'
import MenuAddition from 'components/MenuAddition'
import { LeftArrowButton, RightArrowButton } from 'components/ArrowButton'
import SlideDots from 'components/SlideDots'

import MainPromoContent from './components/MainPromoContent'
import MainPromoImage from './components/MainPromoImage'
import DATA from './data.js'

import 'keen-slider/keen-slider.scss'
import styles from './MainPromo.module.scss'

const MainPromo = () => {
	const [loaded, setLoaded] = useState(false)
	const [currentSlide, setCurrentSlide] = useState(0)

	const sliderSettings = {
		initial: 0,
		loop: true,
		slideChanged(slider) {
			setCurrentSlide(slider.track.details.rel)
		},
		created() {
			setLoaded(true)
		}
	}

	const [sliderRef, instanceRef] = useKeenSlider(sliderSettings)

	const onArrowClick = (event, type) => {
		event.stopPropagation()
		instanceRef.current?.[type]()
	}

	const onDotClick = index => {
		instanceRef.current?.moveToIdx(index)
	}

	return (
		<section className={styles.promo}>
			<Header />

			<div ref={sliderRef} className={classNames('keen-slider', styles.slider)}>
				{DATA.map(slide => {
					return (
						<div className='keen-slider__slide' key={slide.id}>
							<div className={styles.wrapper}>
								<MenuAddition />
								<MainPromoContent slideData={slide} />
								<MainPromoImage imageName={slide.imageName} />
							</div>
						</div>
					)
				})}
			</div>

			{loaded && instanceRef.current && (
				<div className={styles.navigation}>
					<LeftArrowButton onClick={event => onArrowClick(event, 'prev')} />
					<SlideDots
						slides={instanceRef?.current?.track.details.slides.length}
						activeId={currentSlide}
						onClick={onDotClick}
					/>
					<RightArrowButton onClick={event => onArrowClick(event, 'next')} />
				</div>
			)}
		</section>
	)
}

export default MainPromo

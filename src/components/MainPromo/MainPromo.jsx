/* eslint-disable */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

import styles from './MainPromo.module.scss'
import DATA from './data.js'
import { useSelector } from 'react-redux'
import MenuAddition from 'components/MenuAddition'

const transformText = text => {
	const components = {
		em: ({ node, ...props }) => <span className={styles.green} {...props} />,

		strong: ({ node, ...props }) => (
			<span className={styles.greenBig} {...props} />
		),
		p: React.Fragment
	}

	return <ReactMarkdown children={text} components={components} />
}

const getDataFromCurrentSlide = (currentSlide, currentLanguage) => {
	return {
		id: currentSlide.id,
		promoText: transformText(currentSlide.promoText[currentLanguage]),
		promoPostText: transformText(currentSlide.promoPostText[currentLanguage]),
		buttonText: transformText(currentSlide.buttonText[currentLanguage]),
		buttonPostText: transformText(currentSlide.buttonPostText[currentLanguage]),
		image: currentSlide.image,
		url: currentSlide.url
	}
}

const MainPromo = () => {
	const [currentSlideId, setCurrentSlideId] = useState(0)
	const currentLanguage = useSelector(store => store.language.language)

	const currentSlide = DATA.filter(slide => slide.id === currentSlideId)[0]

	const {
		id,
		promoText: contentTitleText,
		promoPostText: contentPostTitleText,
		buttonText,
		buttonPostText: postButtonText,
		imageSrc,
		url
	} = getDataFromCurrentSlide(currentSlide, currentLanguage)

	return (
		<section className={styles.promo} key={id}>
			<div className={styles.wrapper}>
				<MenuAddition />
				<div className={styles.content}>
					<h2 className={styles.contentTitle}>{contentTitleText}</h2>
					<div className={styles.contentPostTitle}>{contentPostTitleText}</div>
					<Link to={url} className={styles.button}>
						{buttonText}
					</Link>
					<div className={styles.postButton}>{postButtonText}</div>
				</div>

				<div className={styles.photo}>
					<img src={imageSrc} alt='' className={styles.photoImage} />
				</div>
			</div>

			<div className={styles.dots}></div>
		</section>
	)
}

export default MainPromo

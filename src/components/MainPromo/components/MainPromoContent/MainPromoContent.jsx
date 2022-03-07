import React from 'react'
import { useSelector } from 'react-redux'
import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styles from './MainPromoContent.module.scss'

const transformText = text => {
	const components = {
		// eslint-disable-next-line no-unused-vars
		em: ({ node, ...props }) => <span className={styles.green} {...props} />,

		// eslint-disable-next-line no-unused-vars
		strong: ({ node, ...props }) => (
			<span className={styles.greenBig} {...props} />
		),
		p: React.Fragment
	}

	return <ReactMarkdown components={components}>{text}</ReactMarkdown>
}

const getDataFromCurrentSlide = (currentSlide, currentLanguage) => {
	return {
		promoText: transformText(currentSlide.promoText[currentLanguage]),
		promoPostText: transformText(currentSlide.promoPostText[currentLanguage]),
		buttonText: transformText(currentSlide.buttonText[currentLanguage]),
		buttonPostText: transformText(currentSlide.buttonPostText[currentLanguage]),
		url: currentSlide.url
	}
}

const MainPromoContent = ({ slideData }) => {
	const currentLanguage = useSelector(store => store.language.language)

	const {
		promoText: contentTitleText,
		promoPostText: contentPostTitleText,
		buttonText,
		buttonPostText: postButtonText,
		url
	} = getDataFromCurrentSlide(slideData, currentLanguage)

	return (
		<div className={styles.content}>
			<h2 className={styles.title}>{contentTitleText}</h2>
			<div className={styles.postTitle}>{contentPostTitleText}</div>

			<div className={styles.buttonWrapper}>
				<Link to={url} className={styles.button}>
					{buttonText}
				</Link>
				<div className={styles.postButton}>{postButtonText}</div>
			</div>
		</div>
	)
}

MainPromoContent.propTypes = {
	slideData: PropTypes.object
}

export default MainPromoContent

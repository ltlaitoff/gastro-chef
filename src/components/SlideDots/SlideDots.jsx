import React from 'react'
import PropTypes from 'prop-types'
import styles from './SlideDots.module.scss'
import classNames from 'classnames'

const prepareSlides = slides => {
	if (typeof slides !== 'number') return slides

	return new Array(slides).fill('').map((_, index) => ({
		id: index
	}))
}

const SlideDots = ({ slides, activeId, className, onClick, ...args }) => {
	const slidesArray = prepareSlides(slides)

	return (
		<ul className={classNames(styles.dots, className)} {...args}>
			{slidesArray.map(slide => {
				const slideId = slide.id

				return (
					<li
						key={slideId}
						className={classNames(styles.dot, {
							[styles.accent]: activeId === slideId
						})}
						onClick={() => onClick(slideId)}
					>
						<button className={styles.button}></button>
					</li>
				)
			})}
		</ul>
	)
}

SlideDots.propTypes = {
	slides: PropTypes.oneOfType([
		PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.number
			})
		),
		PropTypes.number
	]),
	activeId: PropTypes.number.isRequired,
	className: PropTypes.string,
	onClick: PropTypes.func
}

export default SlideDots

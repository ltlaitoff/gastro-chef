import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import DATA from './data.js'
import styles from './MenuAddition.module.scss'
import classNames from 'classnames'
import { useSelector } from 'react-redux'
import { PropTypes } from 'prop-types'

const MenuAddition = ({ className, ...args }) => {
	const [images, setImages] = useState({})
	const currentLanguage = useSelector(store => store.language.language)

	useEffect(() => {
		DATA.map(item => {
			const iconName = item.icon

			if (iconName) {
				import(`../../assets/images/favicons/${iconName}.svg`).then(image => {
					setImages(imagesObj => ({ ...imagesObj, [iconName]: image.default }))
				})
			}
		})
	}, [])

	return (
		<nav className={classNames(styles.menu, className)} {...args}>
			<ul className={styles.list}>
				{DATA.map(item => {
					const text = item.text ? item.text[currentLanguage] : null
					const iconName = item.icon
					const linkClassNames = classNames(styles.link, {
						[styles.twoComponents]: item.buttonType?.includes('twoComponents'),
						[styles.someLeft]: item.buttonType?.includes('left')
					})

					return (
						<li className={styles.item} key={item.id}>
							<Link to={item.link} className={linkClassNames}>
								{text}
								{iconName && (
									<img src={images && images[iconName]} alt={iconName} />
								)}
							</Link>
						</li>
					)
				})}
			</ul>
		</nav>
	)
}

MenuAddition.propTypes = {
	className: PropTypes.string
}

MenuAddition.DefaultProps = {
	className: ''
}

export default MenuAddition

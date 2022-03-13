import React, { useState, useEffect } from 'react'
import { Dignity as DATA } from 'data'

import styles from './Dignity.module.scss'

const Dignity = () => {
	const [images, setImages] = useState([])

	useEffect(() => {
		DATA.map(item => {
			const iconName = item.icon

			if (iconName) {
				import(`../../assets/images/favicons/dignity-${iconName}.svg`).then(
					image => {
						console.log(image)
						setImages(imagesObj => ({
							...imagesObj,
							[iconName]: image.default
						}))
					}
				)
			}
		})
	}, [])

	return (
		<div className={styles.dignity}>
			<ul className={styles.list}>
				{DATA.map(item => {
					const iconName = item.icon

					return (
						<li className={styles.item} key={item.id}>
							<img
								src={images[iconName]}
								alt={iconName}
								className={styles.icon}
							/>

							<div className={styles.text}>{item.text}</div>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default Dignity

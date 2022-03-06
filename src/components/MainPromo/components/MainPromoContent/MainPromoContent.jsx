import React from 'react'

import styles from './MainPromoContent.module.scss'

const MainPromoContent = ({ slideData }) => {
	return (
		<div className={styles.content}>
			<h2 className={styles.contentTitle}>{contentTitleText}</h2>
			<div className={styles.contentPostTitle}>{contentPostTitleText}</div>
			<Link to={url} className={styles.button}>
				{buttonText}
			</Link>
			<div className={styles.postButton}>{postButtonText}</div>
		</div>
	)
}

export default MainPromoContent

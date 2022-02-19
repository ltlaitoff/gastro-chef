import React from 'react'
import { PropTypes } from 'prop-types'

import styles from './Languages.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setLanguage } from 'store/language'
import classNames from 'classnames'

const LANGUAGES_LIST = [
	{
		id: 0,
		code: 'ru'
	},
	{
		id: 1,
		code: 'ua'
	},
	{
		id: 2,
		code: 'en'
	}
]

const Languages = ({ className, ...args }) => {
	const dispatch = useDispatch()
	const currentLanguage = useSelector(store => store.language.language)

	const changeLanguage = languageCode => {
		dispatch(setLanguage(languageCode))
	}

	return (
		<div className={classNames(styles.languages, className)} {...args}>
			{LANGUAGES_LIST.map(language => {
				return (
					<button
						key={language.id}
						data-testid={language.id}
						className={classNames(styles.button, {
							[styles.accent]: language.code === currentLanguage
						})}
						onClick={() => changeLanguage(language.code)}
					>
						{language.code.toUpperCase()}
					</button>
				)
			})}
		</div>
	)
}

Languages.propTypes = {
	className: PropTypes.string
}

export default Languages

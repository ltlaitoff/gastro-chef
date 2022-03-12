import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import styles from './Menu.module.scss'
import { useSelector } from 'react-redux'
import { Menu as DATA } from 'data'

const Menu = ({ ...args }) => {
	const currentLanguage = useSelector(store => store.language.language)

	return (
		<nav className={styles.menu} data-testid='menu' {...args}>
			<ul className={styles.list}>
				{DATA.map(item => {
					return (
						<li
							key={item.id}
							className={classNames(styles.item, {
								[styles.accent]: item.accent
							})}
							data-testid='item'
						>
							<Link to={item.href} className={styles.link}>
								{item.text[currentLanguage]}
							</Link>
						</li>
					)
				})}
			</ul>
		</nav>
	)
}

export default Menu

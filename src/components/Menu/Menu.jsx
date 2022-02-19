import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import styles from './Menu.module.scss'
import { useSelector } from 'react-redux'

const menuList = [
	{
		id: 0,
		text: {
			ru: 'Программы питания',
			ua: 'Програми харчування',
			en: 'Nutrition programs'
		},
		href: '/'
	},
	{
		id: 1,
		text: {
			ru: 'Бизнес-ланчи',
			ua: 'Бізнес-ланчі',
			en: 'Business lunches'
		},
		href: '/'
	},
	{
		id: 2,
		text: {
			ru: 'Gastro Shop',
			ua: 'Gastro Shop',
			en: 'Gastro Shop'
		},
		href: '/',
		accent: true
	},
	{
		id: 3,
		text: {
			ru: 'О нас',
			ua: 'Про нас',
			en: 'About Us'
		},
		href: '/'
	},
	{
		id: 4,
		text: {
			ru: 'Блог',
			ua: 'Блог',
			en: 'Blog'
		},
		href: '/'
	}
]

const Menu = ({ ...args }) => {
	const currentLanguage = useSelector(store => store.language.language)

	return (
		<nav className={styles.menu} data-testid='menu' {...args}>
			<ul className={styles.list}>
				{menuList.map(item => {
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

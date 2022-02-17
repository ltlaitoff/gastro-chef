import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import styles from './Menu.module.scss'

const menuList = [
	{
		id: 0,
		text: 'Програмы питания',
		href: '/'
	},
	{
		id: 1,
		text: 'Бизнес-ланчи',
		href: '/'
	},
	{
		id: 2,
		text: 'Gastro Shop',
		href: '/',
		accent: true
	},
	{
		id: 3,
		text: 'О нас',
		href: '/'
	},
	{
		id: 4,
		text: 'Блог',
		href: '/'
	}
]

const Menu = ({ ...args }) => {
	return (
		<nav className={styles.menu} data-testid='menu' {...args}>
			<ul className={styles.list}>
				{menuList.map(item => {
					return (
						<li
							className={classNames(styles.item, {
								[styles.accent]: item.accent
							})}
							data-testid='item'
							key={item.key}
						>
							<Link to={item.href} className={styles.link}>
								{item.text}
							</Link>
						</li>
					)
				})}
			</ul>
		</nav>
	)
}

export default Menu

import React from 'react'

import LeftArrowButton from './LeftArrowButton'
import RightArrowButton from './RightArrowButton'

export default {
	title: 'ArrowButton',
	component: LeftArrowButton,

	argTypes: {
		className: '',
		iconClassName: '',
		onClick: () => {}
	}
}

export const LeftArrow = args => <LeftArrowButton {...args} />
export const RightArrow = args => <RightArrowButton {...args} />

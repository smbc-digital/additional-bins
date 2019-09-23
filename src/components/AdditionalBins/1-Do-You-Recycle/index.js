import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import withContext from '../../WithContext'
import { getPageRoute } from '../../../helpers/pagehelper'
import { RadioInputsContainer, Button } from 'smbc-react-components'
import { HEADING } from '../../Config'

export const DoYouRecycle = ({ context: { onChange, doYouRecycle }, history}) => {
	const options = [
		{
			label: 'No, I want to but there\'s not enough space in my recycling bins',
			id: 'not-enough-space',
			name: 'doYouRecycle',
			value: 'not-enough-space'
		},

		{
			label: 'No, I don\'t know what I can recycle',
			id: 'what-can-i-recycle',
			name: 'doYouRecycle',
			value: 'what-can-i-recycle'
		},
		{
			label: 'Yes',
			id: 'Yes',
			name: 'doYouRecycle',
			value: 'true'
		}
	]

	const onSubmit = event => {
		event.preventDefault()
		if(doYouRecycle.value === 'not-enough-space') {
			history.push(getPageRoute(8))
		} else if(doYouRecycle.value === 'what-can-i-recycle'){
			history.push(getPageRoute(7))
		} else {
			history.push(getPageRoute(2))
		}
	}

	return (
		<Fragment>
			<form onSubmit={onSubmit}>
			<h1>{ HEADING }</h1>
			<h2>Do you recycle as much as possible?</h2>
				<RadioInputsContainer
					options={options}
					onChange={onChange}
					value={doYouRecycle.value}
					displayHeading={false}
					legend='Do you recycle as much as possible?'
				/>
				<Button label='Next step' isValid={doYouRecycle.isValid} />
			</form>
		</Fragment>
	)
}

DoYouRecycle.propTypes = {
	context: PropTypes.object,
	history: PropTypes.object
}

export default withContext(DoYouRecycle)

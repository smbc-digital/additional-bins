import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import withContext from '../../WithContext'
import { getPageRoute } from '../../../helpers/pagehelper'

export const DoYouRecycle = ( history ) => {
	

	const onSubmit = event => {
		event.preventDefault()
		history.push(getPageRoute(2))
	}

	return (
		<Fragment>
			<h1>Hello</h1>
		
		</Fragment>
	)
}

DoYouRecycle.propTypes = {
	context: PropTypes.object,
	history: PropTypes.object
}

export default withContext(DoYouRecycle)
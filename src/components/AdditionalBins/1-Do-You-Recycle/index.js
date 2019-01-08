import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import withContext from '../../WithContext'

export const DoYouRecycle = () => {
	
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
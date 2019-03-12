
import React, { Component, Fragment } from 'react'
import showAToZFooter from '../../../helpers/aToZFooterHelper'
import showBreadCrumbs from '../../../helpers/breadcrumbHelper'
import { ErrorPage } from 'smbc-react-components'
import PropTypes from 'prop-types'
import withContext from '../../WithContext'

export class FailurePage extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
		showBreadCrumbs(true)
		showAToZFooter(true)
	}

    render() {
        const { history } = this.props
        return(
            <Fragment>
                <ErrorPage
                    history={history}
                />
            </Fragment>
        )
    }
}

FailurePage.propTypes = {
	history: PropTypes.object
}

export default withContext(FailurePage)
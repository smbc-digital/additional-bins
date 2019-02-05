import React, { Fragment, Component } from 'react'
import ReactGA from 'react-ga'
import { getPageRoute } from '../../../helpers/pagehelper'
import withContext from '../../WithContext'
import { OrderRecyclingBinsLink } from '../../Config'
import showBreadCrumbs from '../../../helpers/breadcrumbHelper'
import appendBreadCrumb from '../../../helpers/breadCrumbAppendHelper'
import showAToZFooter from '../../../helpers/aToZFooterHelper'

export class OrderRecyclingBins extends Component {
	constructor(props) {
		super(props)
		ReactGA.pageview(getPageRoute(8))
	}

	componentDidMount() {
		showBreadCrumbs(true)
		appendBreadCrumb('Request a new bin', 'https://www.stockport.gov.uk/topic/request-a-new-bin')
		showAToZFooter(true)
	}

	render() {
		return (
			<Fragment>
				<form>
					<div className="ineligible-warning">
						<div className="header-container">
							<div>
								<i className="fa fa-exclamation" aria-hidden="true" />
							</div>
							<h1>It looks like you need additional recycling bins</h1>
						</div>
						<h2>What you can do next</h2>
						<p>You can order additional recycling bins so that you</p>
						<ul>
							<li>recycle as much as possible</li>
							<li>have more space in your black bin for your non-recyclable waste</li>
						</ul>
						<p>Use the button below to order additional recycling bins.</p>
						<a href={OrderRecyclingBinsLink} className="button-primary">
							Order additional recycling bins
						</a>
					</div>
				</form>
			</Fragment>
		)
	}
}

export default withContext(OrderRecyclingBins)

import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import Provider from './components/Provider'
import { Router } from 'react-router'
import ReactGA from 'react-ga'
import createHistory from 'history/createBrowserHistory'
import ScrollToTop from './components/ScrollToTop'

let history = createHistory()
const rootElem = document.getElementById('root')

if (rootElem.dataset.analyticsCode) {
	ReactGA.initialize(rootElem.dataset.analyticsCode, {titleCase: false})
}

ReactDOM.render(
	<Provider>
		<Router history={history}>
			<ScrollToTop>
				<App />
			</ScrollToTop>
		</Router>
	</Provider>,
	document.getElementById('root')
)
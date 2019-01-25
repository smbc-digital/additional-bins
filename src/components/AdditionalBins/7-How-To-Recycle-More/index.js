import React, { Fragment, Component } from 'react'
import ReactGA from 'react-ga'
import { getPageRoute } from '../../../helpers/pagehelper'
import withContext from '../../WithContext'
import { WhatYouCanPutInYourBinsLink } from '../../Config'
import showBreadCrumbs from '../../../helpers/breadcrumbHelper'
import showAToZFooter from '../../../helpers/aToZFooterHelper'


export class HowToRecycleMore extends Component {
    constructor(props){
        super(props)
        ReactGA.pageview(getPageRoute(7))
    }

    componentDidMount() {
        showBreadCrumbs(true)
        showAToZFooter(true)
    }

    render() {
        return(
            <Fragment>
                    <h1>We&apos;re sorry but you can&apos;t request an additional black bin</h1>
                    <h2>Why not?</h2>
                    <p>You must recycle as much of your waste as possible.</p>
                    <h3>What you can do next</h3>
                    <p>To find out about what goes in each bin and how you can recycle as much waste as possible, visit our recycling pages using the button below.</p>
                    <a className='button-primary' href={WhatYouCanPutInYourBinsLink} id='what-you-can-put-in-your-bins'>What you can put in your bins</a>
            </Fragment>
        )
    }
}

export default withContext(HowToRecycleMore)
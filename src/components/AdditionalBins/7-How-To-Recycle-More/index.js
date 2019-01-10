import React, { Fragment, Component } from 'react'
import withContext from '../../WithContext'
import showBreadCrumbs from '../../../helpers/breadcrumbHelper'
import showAToZFooter from '../../../helpers/aToZFooterHelper'

export class HowToRecycleMore extends Component {
    constructor(props){
        super(props)
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
                    <a className='button-primary' href='https://www.stockport.gov.uk/what-you-can-put-in-your-bins'>What can I put in my bins?</a>
            </Fragment>
        )
    }
}

export default withContext(HowToRecycleMore)
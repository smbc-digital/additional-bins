import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'
import withContext from '../../WithContext'
import showBreadCrumbs from '../../../helpers/breadcrumbHelper'
import  appendBreadCrumb from '../../../helpers/breadCrumbAppendHelper'
import showAToZFooter from '../../../helpers/aToZFooterHelper'
import { HEADING, PDFLink, PDFSize } from '../../Config'

export class Success extends Component {

    constructor(props) {
        super(props)
        this.props.context
    }

    componentDidMount = () => {
        showBreadCrumbs(true)
        appendBreadCrumb('Request a new bin', 'https://www.stockport.gov.uk/topic/request-a-new-bin')
        showAToZFooter(true)
    }

    render() {
        const { crmCaseReference} = this.props.context
        const { history } = this.props
        history.block()

        return (
            <Fragment>
                <section className="header-container">
                    <h1>{HEADING}</h1>
                    <p className="h2">Thanks for your request</p>
                </section>               
                <p><strong>Your reference number is:</strong> {crmCaseReference} </p>                
                        <p>Please keep this number safe as you&apos;ll need it for the next step. You&apos;ll also receive an email with this information.</p>
                        <h2>What happens next</h2>
                        <p>You must download and fill in a waste diary to help us understand why you need an additional black bin. You&apos;ll need to record the waste you put in your black bin over 7 days.</p>
                        <p>You can use the button below to download the waste diary. You&apos;ll also receive a link in the email if you want to complete it later. The email will tell you how to return your waste diary to us once you’ve completed it.</p>
                        <a className='button-primary' href={PDFLink} target='_blank' rel="noopener noreferrer">Download a waste diary (PDF {PDFSize})</a>
           </Fragment>
        )
    }
}


Success.propTypes = {
    context: PropTypes.object,
    history: PropTypes.object
}


export default withContext(Success)
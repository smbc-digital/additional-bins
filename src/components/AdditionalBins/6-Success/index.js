import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'
import withContext from '../../WithContext'
import showBreadCrumbs from '../../../helpers/breadcrumbHelper'
import showAToZFooter from '../../../helpers/aToZFooterHelper'
import { HEADING } from '../../Config'

export class Success extends Component {

    constructor(props) {
        super(props)
        this.props.context
    }

    componentDidMount = () => {
        showBreadCrumbs(true)
        showAToZFooter(true)
    }

    render() {
        const { crmCaseReference, receiptNumber, binDeliveryDate } = this.props.context

        return (
            <Fragment>

                <section className="header-container">
                    <h1>{HEADING}</h1>
                    <p className="h2">Thanks for your request</p>
                </section>
                { receiptNumber && <p>Thanks for your payment, your request has been approved.</p> }
                <p><strong>Your reference number is:</strong> {crmCaseReference} </p>
                { receiptNumber ?
                    <Fragment>
                        <p><strong>Your receipt number is:</strong> {receiptNumber} 12345_CHANGE_ME_TOO</p> <p>Please keep these numbers safe as you&apos;ll need them if you need to contact us about your bin delivery. You&apos;ll also receive an email with this information.</p>
                        <h2>What happens next</h2>
                        <p>The additional black bin will be delivered on <strong>{ binDeliveryDate } 17/01/19/CHANGEME</strong>. You do not need to be in to accept the bin, we’ll leave it at the front edge of your property.</p>
                        <p>Please note: all bins remain the property of the council.</p>
                        <a className='button-primary' href='https://www.stockport.gov.uk'>Go to the homepage</a>
                    </Fragment>
                    : 
                    <Fragment>
                        <p>Please keep this number safe as you&apos;ll need it for the next step. You&apos;ll also receive an email with this information.</p>
                        <h2>What happens next</h2>
                        <p>You must download and fill in a waste diary to help us understand why you need an additional black bin. You&apos;ll need to record the waste you put in your black bin over 7 days.</p>
                        <p>You can use the button below to download the waste diary. You&apos;ll also receive a link in the email if you want to complete it later. The email will tell you how to return your waste diary to us once you’ve completed it.</p>
                        <a className='button-primary' href='https://s3-eu-west-1.amazonaws.com/live-iag-static-assets/pdf/BinCalendars/Waste+diary+v2.pdf' target='_blank' rel="noopener noreferrer">Download a waste diary (PDF 66Kb)</a>
                    </Fragment>
                }

            </Fragment>
        )
    }
}


Success.propTypes = {
    context: PropTypes.object,
}


export default withContext(Success)
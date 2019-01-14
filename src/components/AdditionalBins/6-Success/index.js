import React, { Fragment, Component} from 'react'
import PropTypes from 'prop-types'
import withContext from '../../WithContext'
import showBreadCrumbs from '../../../helpers/breadcrumbHelper'
import showAToZFooter from  '../../../helpers/aToZFooterHelper'
import { HEADING } from '../../Config'

export class Success extends Component {

    constructor(props){
        super(props)
        this.props.context
    }

    componentDidMount = () => {
        showBreadCrumbs(true)
        showAToZFooter(true)
    }

    render() {
        const { crmCaseReference } = this.props.context

        return(
            <Fragment>
                    <section className="header-container">
                        <h1>{ HEADING }</h1>
                        <p className="h2">Thanks for your request</p>
                        <p className="h3">Case reference: {crmCaseReference} 12345_CHANGE_ME</p>
                    </section>
                    <h2>What happens next</h2>
                    <p>You’ll receive a confirmation email of your request for an additional black bin.</p>
                    <h3>Waste diary</h3>
                    <p>To help us understand why you need an additional black bin, you must download and fill in a waste diary every day for a week.</p>
                    <p>The email confirmation will tell you how to return your waste diary to us once you have completed it.</p>
                    <a className='button-primary' href='https://s3-eu-west-1.amazonaws.com/live-iag-static-assets/pdf/BinCalendars/Waste+diary+v2.pdf'>Download a waste diary</a>
            </Fragment>
        )
    }
}


Success.propTypes = {
    context: PropTypes.object,
}


export default withContext(Success)
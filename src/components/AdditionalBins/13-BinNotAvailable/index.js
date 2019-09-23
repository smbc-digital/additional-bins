import React, { Component } from 'react'
import showBreadCrumbs from '../../../helpers/breadcrumbHelper'
import showAToZFooter from '../../../helpers/aToZFooterHelper'

class BinNotAvailable extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        showBreadCrumbs(true)
        showAToZFooter(true)
    }

    render() {
        return <form>
            <div className="ineligible-warning">
                <div className="header-container">
                <div>
                        <span className="fa fa-exclamation" aria-hidden="true"></span>
                </div>
                <h1> We&apos;re sorry but you can&apos;t use this form</h1>
            </div>
            <h2>Why not?</h2>
            <p>You must live in a property that already has a black wheelie bin.</p>
            <p>To be eligible for an additional black wheelie bin, you must have enough outside space to store it off the road.
                Properties that are not eligible include; flats above shops or terrace properties without a garden.
            </p>
            <h2>What you can do next</h2>
            <p>Please call us on <strong>0161 217 6111</strong> if you think you&apos;re still eligible for an additional black
                wheelie bin or you don&apos;t have enough space for your current non-recyclable waste.</p>
            <a href="https://www.stockport.gov.uk" className="button-primary">Go to the homepage</a>
            </div>
            </form>
    }
}

export default BinNotAvailable
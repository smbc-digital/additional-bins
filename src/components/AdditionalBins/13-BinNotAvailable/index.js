import React, { Component } from 'react'

class BinNotAvailable extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <section>
            <h1>We’re sorry, but you can’t use this form</h1>
            <h2>Why not?</h2>
            <p>You must live in a property that already has a black wheelie bin.</p>
            <p>To be eligible for an additional black wheelie bin, you must have enough outside space to store it off the road.
                Properties that are not eligible include; flats above shops or terrace properties without a garden.
            </p>
            <h2>What you can do next</h2>
            <p>If you still think you’re eligible for an additional black wheelie bin or you don’t have enough
            space for your current non-recyclable waste, please call us on <strong>0161 217 6111</strong> to discuss your needs.
            </p>
            <a href="https://www.stockport.gov.uk" className="button-primary">Go to the homepage</a>
        </section>
    }
}

export default BinNotAvailable
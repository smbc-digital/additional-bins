import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import {  Button, Anchor } from 'smbc-react-components'
import withContext from '../../WithContext'


export const OrderRecyclingBins = ({ history }) => {


const onSubmit = event => {
    event.preventDefault()
    window.location.assign('https://www.stockport.gov.uk/start/additional-recycling-bins')
}


    return(
        <Fragment>
            <form onSubmit={onSubmit}>
                <h1>It looks like you need additional recycling bins</h1>
                <h2>What you can do next</h2>
                <p>You can order additional recycling bins so that you</p>
                <ul>
                    <li>recycle as much as possible</li>
                    <li>have more space in your black bin for your non-recyclable waste</li>
                </ul>
                <p>Use the button below to order additional recycling bins.</p>          
                <Button className='button-primary' isValid = {true} label='Order additional recycling bins'/>
            </form>        
            <Anchor label='Previous' history={history} />
        </Fragment>
    )
}


OrderRecyclingBins.propTypes = {
    context: PropTypes.object,
    history: PropTypes.object,
}


export default withContext(OrderRecyclingBins)
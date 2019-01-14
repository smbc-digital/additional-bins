import 'isomorphic-fetch'
import React, { Component } from 'react'
import { Button } from 'smbc-react-components'
import PropTypes from 'prop-types'
import SubmitUtil from '../../Utils' 
import { getPageRoute } from '../../../helpers/pagehelper'
import withContext from '../../WithContext'
import { PRICE, HEADING } from '../../Config'

export class PaymentBuffer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isLoading: false
		}
	}

    onSubmit = async (event) => {
        event.preventDefault()
        const { context, history } = this.props
        
        this.setState({ isLoading: true })
        let rawResponse = await SubmitUtil(context)
        if(rawResponse.status === 200){
            window.location.assign(rawResponse.url)
        } else{
            history.push(getPageRoute(11))
        }
    }

render() {
    const { isLoading } = this.state
    return ( 
        <form onSubmit={this.onSubmit}>
            <h1>{ HEADING }</h1>
            <p>You&#39;re now ready to pay for the bin, use the button below to go to our payments page. Continue to our payment page to fill in your card details and complete your order.</p>
            <p>The cost is { PRICE }</p>
            <Button 
                label='Continue to payment' 
                isValid={true} 
                isLoading={isLoading}
            />
        </form>
     )
    }
}

PaymentBuffer.propTypes = {
	context: PropTypes.object,
	history: PropTypes.object
}

export default withContext(PaymentBuffer)
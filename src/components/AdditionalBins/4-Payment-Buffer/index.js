import 'isomorphic-fetch'
import React, { Component } from 'react'
import { Button, Anchor } from 'smbc-react-components'
import PropTypes from 'prop-types'
import SubmitUtil from '../../Utils'
import withContext from '../../WithContext'
import { PRICE, HEADING } from '../../Config'
import ReCAPTCHA from 'react-google-recaptcha'
import { getPageRoute } from '../../../helpers/pagehelper'

export class PaymentBuffer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            recaptchaValid: false
        }
    }

    onChangeRecaptcha = value => {
        this.setState({
            recaptchaValid: value ? true : false
        })
    }

    onSubmit = async (event) => {
        event.preventDefault()
        const { context, history } = this.props

        // this.setState({ isLoading: true })
        // let rawResponse = await SubmitUtil(context)
        // if(rawResponse.status === 200){
        //     window.location.assign(rawResponse.url)
        // } else{
        //     history.push(getPageRoute(9))
        // }

        //this is to to temp ignore payments for testing externally
        history.push(getPageRoute(5))
    }

    render() {
        const { isLoading, recaptchaValid } = this.state
        const { context: { displayRecaptcha }, history } = this.props
        return (
            <form onSubmit={this.onSubmit}>
                <h1>{HEADING}</h1>
                <p>You&#39;re now ready to pay for the bin, use the button below to go to our payments page.</p>
                <p>Continue to our payment page to fill in your card details and complete your order.</p>
                <p>The cost is {PRICE}.</p>
                {displayRecaptcha && (
                    <div className="recaptcha">
                        <ReCAPTCHA
                            sitekey="6LfAeSIUAAAAAGsx6tYHz4MIvhP0pSx9Tq7Hf8Yx"
                            onChange={this.onChangeRecaptcha}
                            name="recaptcharesult"
                        />
                    </div>
                )}

                <Button
                    id='continue-to-payment'
                    label='Continue to payment'
                    isValid={recaptchaValid || !displayRecaptcha}
                    isLoading={isLoading}
                />
                <Anchor label='Previous' history={history} />
            </form>

        )
    }
}

PaymentBuffer.propTypes = {
    context: PropTypes.object,
    history: PropTypes.object
}

export default withContext(PaymentBuffer)
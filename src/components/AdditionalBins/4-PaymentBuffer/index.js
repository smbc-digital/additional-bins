import React from 'react'
import { Button } from 'smbc-react-components'
import 'isomorphic-fetch'
// import getPageRoute from '../../../helpers/pagehelper'

const fetchPaymentUrl = async () => {
    try {
        const response = await fetch('/additional-black-bin/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                test: 'test'
            })
        })

        if (response.status !== 200) {
            return null
        }

        const url = await response.text()

        return url
    } catch (error) {
        return null
    }
}

const PaymentBuffer = ({ history }) => {

    const onSubmit = async (event) => {
        event.preventDefault()

        window.location.assign(url)
        // const paymentUrl = await fetchPaymentUrl()

        // if (paymentUrl === null) {
        //     history.push(getPageRoute(11))

        //     return
        // }

    }

    return ( 
        <form onSubmit={onSubmit}>
            <h1>Request an additional black bin</h1>
            <p>You're now ready to pay for the bin, use the button below to go to our payments page. Continue to our payment page to fill in your card details and complete your order.</p>
            <Button label='Continue to payment' isValid={true} />
        </form>
     )
}
 
export default PaymentBuffer
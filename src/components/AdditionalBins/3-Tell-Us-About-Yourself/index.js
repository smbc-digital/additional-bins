import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import withContext from '../../WithContext'
import { getPageRoute } from '../../../helpers/pagehelper'
import { AlertForm, TextInputContainer, Button, Anchor, AddressPicker } from 'smbc-react-components'

export const TellUsAboutYourself = ({ context: { onChange, address, firstName, lastName, emailAddress, phoneNumber, whyMoreSpace }, history }) => {
    
    const onSubmit = event => {
        event.preventDefault()
        if(whyMoreSpace.value !== 'other')
        {
            history.push(getPageRoute(7)) //TODO: change routes to correct pages & make addresspicker auto only
        }
        else {
            history.push(getPageRoute(8))
        }
    }
    
    return (
        <Fragment>
            <form onSubmit={onSubmit}>
                <h1>Request an additional black bin</h1>
                <AlertForm
                level='warning'
                content='You must be a Stockport resident to order an additional black bin.'
                />
                <h2>Tell us about yourself</h2>
                <TextInputContainer onChange={onChange} value={firstName.value} optional={false} maxLength='60' id='firstName' type='text' label='First name' />
                <TextInputContainer onChange={onChange} value={lastName.value} optional={false} maxLength='60' id='lastName' type='text' label='Last name' />
                <TextInputContainer onChange={onChange} value={phoneNumber.value} optional={true} id='phoneNumber' type='tel' label='Phone number' />
                <TextInputContainer onChange={onChange} value={emailAddress.value} optional={false} id='emailAddress' type='email' label='Email address' />
                <AddressPicker
                        name={'address'}
                        address={address.value}
                        automaticLabel={'Enter the postcode'}
                        automaticTextLabel={'Select the address below'}
                        useStockportPostcode={true}
                        enableHeading={false}
                        onChange={onChange}
                        useVerintLookup={true}
                />
                <Button isValid={ address.isValid && firstName.isValid && lastName.isValid && emailAddress.isValid } label='Next step' />
            </form>
            <Anchor label='Previous' history={history} />
        </Fragment>
    )
}

TellUsAboutYourself.propTypes = {
    context: PropTypes.object,
    history: PropTypes.object
}

export default withContext(TellUsAboutYourself)
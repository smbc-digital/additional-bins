import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import withContext from '../../WithContext'
import { getPageRoute } from '../../../helpers/pagehelper'
import SubmitUtil from '../../Utils'
import { TextInputContainer, Button, Anchor, AddressPicker } from 'smbc-react-components'

export const TellUsAboutYourself = ({ context, history }) => {
    
    const onSubmit = async (event) => {
        event.preventDefault()
        if(context.whyMoreSpace.value !== 'other')
        {
            history.push(getPageRoute(4))
        }
        else {
            let rawResponse = await SubmitUtil(context)
            if(rawResponse.status === 200){
                context.onFormSubmission(rawResponse.caseId)
                history.push(getPageRoute(6))
            } else {
                history.push(getPageRoute(11))
            }
        }
    }
    
    return (
        <Fragment>
            <form onSubmit={onSubmit}>
                <h1>Request an additional black bin</h1>
                <h2>Tell us about yourself</h2>
                <TextInputContainer onChange={context.onChange} value={context.firstName.value} optional={false} maxLength='60' id='firstName' type='text' label='First name' />
                <TextInputContainer onChange={context.onChange} value={context.lastName.value} optional={false} maxLength='60' id='lastName' type='text' label='Last name' />
                <TextInputContainer onChange={context.onChange} value={context.phoneNumber.value} optional={true} maxLength='60' id='phoneNumber' type='tel' label='Phone number' />
                <TextInputContainer onChange={context.onChange} value={context.emailAddress.value} optional={false}  maxLength='60' id='emailAddress' type='email' label='Email address' />
                <AddressPicker
                        name={'address'}
                        address={context.address.value}
                        automaticLabel={'Enter the postcode'}
                        automaticTextLabel={'Select the address below'}
                        useStockportPostcode={true}
                        enableHeading={false}
                        onChange={context.onChange}
                        useVerintLookup={true}
                        shouldDisplayManualSearch={false}
                        showManualOption={false}
                />
                <Button isValid={ context.address.isValid && context.firstName.isValid && context.lastName.isValid && context.emailAddress.isValid } label='Next step' />
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
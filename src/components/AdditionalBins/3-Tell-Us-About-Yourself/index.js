import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'
import withContext from '../../WithContext'
import { getPageRoute } from '../../../helpers/pagehelper'
import { TextInputContainer, Button, Anchor, AddressPicker } from 'smbc-react-components'

export class TellUsAboutYourself extends Component {
    constructor(props){
        super(props)
            this.state = {
                isLoading: false
            }
    }

    onSubmit = (event) => {
        event.preventDefault()
        const { context, history } = this.props
        if(context.whyMoreSpace.value !== 'WAS')
        {
            history.push(getPageRoute(4))
        }
        else {
            history.push(getPageRoute(5))
        }
    }
    
    render(){
        const { context : {onChange, firstName, lastName, phoneNumber, emailAddress, address }, history } = this.props
        const { isLoading } = this.state
        return (
            <Fragment>
                <form onSubmit={this.onSubmit}>
                    <h1>Request an additional black bin</h1>
                    <h2>Tell us about yourself</h2>
                    <TextInputContainer onChange={onChange} value={firstName.value} optional={false} maxLength='35' id='firstName' type='text' label='First name' />
                    <TextInputContainer onChange={onChange} value={lastName.value} optional={false} maxLength='60' id='lastName' type='text' label='Last name' />
                    <TextInputContainer onChange={onChange} value={phoneNumber.value} optional={true} maxLength='60' id='phoneNumber' type='tel' label='Phone number' />
                    <TextInputContainer onChange={onChange} value={emailAddress.value} optional={false}  maxLength='60' id='emailAddress' type='email' label='Email address' />
                    <AddressPicker
                            name={'address'}
                            address={address.value}
                            automaticLabel={'Enter your postcode'}
                            automaticTextLabel={'Select the address below'}
                            useStockportPostcode={true}
                            enableHeading={false}
                            onChange={onChange}
                            useVerintLookup={true}
                            shouldDisplayManualSearch={false}
                            showManualOption={false}
                    />
                    <Button isLoading={isLoading} isValid={ address.isValid && firstName.isValid && lastName.isValid && emailAddress.isValid } label='Next step' />
                </form>
                <Anchor label='Previous' history={history} />
            </Fragment>
        )
    }
}

TellUsAboutYourself.propTypes = {
    context: PropTypes.object,
    history: PropTypes.object
}

export default withContext(TellUsAboutYourself)
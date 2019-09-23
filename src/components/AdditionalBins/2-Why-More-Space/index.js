import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import withContext from '../../WithContext'
import { getPageRoute } from '../../../helpers/pagehelper'
import { RadioInputsContainer, TextAreaInputContainer, Button, Anchor } from 'smbc-react-components'
import { HEADING } from '../../Config'

export const WhyMoreSpace = ({ context: { onChange, whyMoreSpace, whyMoreSpaceOther }, history }) => {
    const options = [
        {
            label: 'Disposable nappies',
            id: 'disposable-nappies',
            name: 'whyMoreSpace',
            value: 'NAP'
        },
        {
            label: 'Medical or healthcare waste',
            id: 'medical-healthcare',
            name: 'whyMoreSpace',
            value: 'MED'
        },
        {
            label: 'There are 6 or more people in the house',
            id: 'more-people',
            name: 'whyMoreSpace',
            value: 'LAR'
        },
        {
            label: 'Other',
            id: 'other',
            name: 'whyMoreSpace',
            value: 'WAS',
            renderIfChecked: () => <TextAreaInputContainer
                value={whyMoreSpaceOther.value}
                isValid={whyMoreSpaceOther.isValid}
                onChange={onChange}
                label={'Tell us the main reason'}
                id={'whyMoreSpaceOther'}
                small
                maxLength={150}
            />
        },
    ]

    const onSubmit = event => {
        event.preventDefault()
        history.push(getPageRoute(3))
    }

    return (
        <Fragment>
            <form onSubmit={onSubmit}>
                <h1>{ HEADING }</h1>
                <h2>Select the main reason you need more space in your black bin</h2>
                <RadioInputsContainer 
                    options={options}
                    onChange={onChange}
                    value={whyMoreSpace.value}
                    displayHeading={false}
                    legend='Why do you need more space?'
                />
                <Button label='Next step' isValid={whyMoreSpace.value === 'WAS' ? whyMoreSpaceOther.isValid : whyMoreSpace.isValid} />
            </form>
            <Anchor label='Previous' history={history} />
        </Fragment>
    )
}

WhyMoreSpace.propTypes = {
    context: PropTypes.object,
    history: PropTypes.object
}

export default withContext(WhyMoreSpace)
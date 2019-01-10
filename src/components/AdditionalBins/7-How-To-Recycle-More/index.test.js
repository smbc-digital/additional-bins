import React from 'react'
import { HowToRecycleMore } from './index'
import renderer from 'react-test-renderer'

describe('HowToRecycleMore',() => {
    describe('snapshot', () => {
        it('renders correctly', () => {
            const context = {}

            const tree = renderer
                .create(<HowToRecycleMore context={context} />)
                .toJSON()
                
            expect(tree).toMatchSnapshot()
        })
    })
})
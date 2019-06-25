import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'
import BinNotAvailable from './index'

Enzyme.configure({ adapter: new Adapter() })

describe('BinNotAvailable', () => {

    describe('snapshot', () => {
        it('renders correctly', () => {

            const tree = renderer
                .create(<BinNotAvailable />)
                .toJSON()
                
            expect(tree).toMatchSnapshot()
        })
    })
})
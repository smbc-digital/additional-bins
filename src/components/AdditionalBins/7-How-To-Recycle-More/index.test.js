import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ReactGA from 'react-ga'
import { HowToRecycleMore } from './index'
import renderer from 'react-test-renderer'

Enzyme.configure({ adapter: new Adapter() })

describe('HowToRecycleMore',() => {
   
    beforeAll(() => {
        ReactGA.initialize('testGA', { testMode: true , titleCase: false})
    })

    beforeEach(() => {
        ReactGA.testModeAPI.calls.length = 0
    })

    it('should dispatch google analytics page view', () => {
        mount(<HowToRecycleMore context={{}}/>)

        expect(ReactGA.testModeAPI.calls).toHaveLength(1)
    })

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
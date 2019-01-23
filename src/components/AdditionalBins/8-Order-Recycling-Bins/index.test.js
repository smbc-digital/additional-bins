import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ReactGA from 'react-ga'
import { OrderRecyclingBins } from './index'
import { ORDERRECYCLINGBINS } from '../../Config'
import renderer from 'react-test-renderer'


Enzyme.configure({ adapter: new Adapter() })
describe('OrderRecyclingBins',() => { 

    beforeAll(() => {
        ReactGA.initialize('testGA', { testMode: true , titleCase: false})
    })

    beforeEach(() => {
        ReactGA.testModeAPI.calls.length = 0
    })

    it('should dispatch google analytics page view', () => {
        mount(<OrderRecyclingBins context={{}}/>)

        expect(ReactGA.testModeAPI.calls).toHaveLength(1)
    })

    it('should push to correct page', () => {
        // Arrange
        window.location.assign = jest.fn()
		const history = { push: jest.fn() }
        const context = {
            doYouRecycle: {
                value: 'test',
                isValid : true
            }
        }

		// Act
        const wrapper = mount(<OrderRecyclingBins history={history} context={context} />)
    
        // Assert
        wrapper.find('form').simulate('submit')
        expect(window.location.assign).toBeCalledWith(ORDERRECYCLINGBINS)
    })

    describe('snapshot', () => {
        it('renders correctly', () => {
            const context = {}

            const tree = renderer
                .create(<OrderRecyclingBins context={context} />)
                .toJSON()
                
            expect(tree).toMatchSnapshot()
        })
    })
})
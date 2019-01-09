import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { OrderRecyclingBins } from './index'
//import renderer from 'react-test-renderer'
import getPageRoute from '../../../helpers/pagehelper'


Enzyme.configure({ adapter: new Adapter() })
describe('OrderRecyclingBins',() => { 

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
        expect(window.location.assign).toBeCalledWith('https://www.stockport.gov.uk/start/additional-recycling-bins')
    })
})
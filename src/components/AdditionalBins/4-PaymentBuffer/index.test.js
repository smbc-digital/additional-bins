import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'
import PaymentBuffer from './index'

Enzyme.configure({ adapter: new Adapter() })

describe('PaymentBuffer', () => {
    
    beforeEach = () => {
        fetch.resetMocks()
    }

    it('should push to correct page when response is 200', () => {
        // Arrange
        const url = 'test-url'
        fetch.mockResponse(url)
        window.location.assign = jest.fn()
        const wrapper = mount(<PaymentBuffer history={{}} />)

        // Act
        wrapper.find('form').simulate('submit')

        // Assert
        expect(window.location.assign).toBeCalledWith(url)
    })

})